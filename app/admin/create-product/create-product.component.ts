import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { Applicationtype } from 'src/app/data/applicationtype';
import { Product } from 'src/app/data/product';
import { UserserviceService } from '../../Services/userservices.service';
import { Category } from '../../data/category';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  private readonly assetsFolderPath = 'assets/products/';
  public productForm: any;
  public id: number = 0;
  public imagePathList: string[] = [];
  public Category: Category[] = [];
  public application: Applicationtype[] = [];
  public product: Product | undefined;
  public productname?: string = "";
  public productlist: Product[] = [];
  loading: boolean = false;
  public url: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private productServiceService: ProductServiceService,
    public router: Router,
    public userserviceService: UserserviceService,
    public route: ActivatedRoute
  ) {
    if (!userserviceService.getuserloginstatus() && !userserviceService.isadmin) {
      router.navigate(['/Login']);
    }
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      console.log(this.id);
    });
    if (this.id !== 0) {
      this.product = this.productServiceService.getproductId(this.id);
      console.log(this.product);
      if (this.product !== undefined) {
        //this.applicationname=this.application.ApplicationName;
      }
    }
    this.productlist = productServiceService.getProduct();
    this.Category = productServiceService.getcategory();
    this.application = productServiceService.getapplication();
  }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: [this.product?.Name, Validators.required],
      price: [this.product?.Price, [Validators.required, Validators.min(1), Validators.max(2147483647)]],
      shortDesc: [this.product?.Shortdescription],
      description: [this.product?.Description],
      categoryId: [this.product?.CategoryId, Validators.required],
      applicationTypeId: [this.product?.ApplicationId, Validators.required]
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>) => {
      this.url = event.target?.result as string;
      console.log(this.url);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  async onSubmit() {
    if (this.productForm.valid) {
      const productName = this.productForm.controls['name'].value;
      const isDuplicate = this.productlist.some(
        product => product.Name?.toLowerCase() === productName.toLowerCase()
      );

      if (isDuplicate) {
        alert('Duplicate product name not allowed.');
      } else {
        try {
          this.productServiceService.Addproduct(
            new Product(
              this.id,
              productName,
              this.productForm.controls['shortDesc'].value,
              this.productForm.controls['price'].value,
              this.url,
              this.productForm.controls['categoryId'].value,
              this.productForm.controls['applicationTypeId'].value,
              this.productForm.controls['description'].value
            )
          );

          console.log('Image uploaded successfully');
          this.router.navigate(['/admin/displayproductlist']);
        } catch (error) {
          console.error('Error uploading image:', error);
          // Handle the error if required
        }
      }
    }
  }
}
