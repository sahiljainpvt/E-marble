import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from '../../Services/product-service.service';
import { Category } from '../../data/category';
import { ignoreElements } from 'rxjs';
import { UserserviceService } from '../../Services/userservices.service';
import { User } from 'src/app/data/user';
import { Product } from 'src/app/data/product';



@Component({
  selector: 'app-createcat',
  templateUrl: './createcat.component.html',
  styleUrls: ['./createcat.component.css']
})
export class CreatecatComponent implements OnInit {
  public categoryForm: any;
  public catname?: string="";
  public Category?:Category | undefined;
  public id:number=0;
  public Categorylist:Category[]=[];

  constructor(private ProductServiceService:ProductServiceService,public router:Router,public route:ActivatedRoute,private formBuilder: FormBuilder,private UserserviceService:UserserviceService){
    if(!UserserviceService.getuserloginstatus() && !UserserviceService.isadmin){
      router.navigate(['/Login']);
    }  
    this.Categorylist= this.ProductServiceService.getcategory();
    this.route.paramMap.subscribe(params =>{
      this.id=Number( params.get('id'));
    })
      if(this.id!==0){
      this.Category=this.ProductServiceService.getcategorybyId(this.id);
      if(this.Category!==undefined){
        this.catname=this.Category.CategoryName;
      }
    }
  }
  ngOnInit(): void
   {
    this.categoryForm = this.formBuilder.group({
      name: [this.catname, Validators.required]
    });
  }
  onSubmit() {
 
    if (this.categoryForm.valid) {
      console.log(this.categoryForm.controls['name'].value);
      if(this.id!==0){
        const temp=this.Categorylist.find(c=>c.CategoryName?.toLowerCase()===(this.categoryForm.controls['name'].value).toLowerCase().trim())
        if(temp!=undefined){
          alert("duplicate category not allowed")
        }else{
      this.ProductServiceService.addcategory(new Category(this.id,this.categoryForm.controls['name'].value))
        this.router.navigate(['/admin/displaycat'])
        }
      }

    else
    {
      const temp=this.Categorylist.find(c=>c.CategoryName?.toLowerCase()===(this.categoryForm.controls['name'].value).toLowerCase().trim())
      if(temp!=undefined)
      {
        alert("duplicate category not allowed")
      }
      else
      {
      this.ProductServiceService.addcategory(new Category(0,this.categoryForm.controls['name'].value))
      this.router.navigate(['/admin/displaycat'])
      }
    }

  }


}
}
