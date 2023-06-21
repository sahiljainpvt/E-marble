import { Component } from '@angular/core';
import { ProductServiceService } from '../../Services/product-service.service';
import { Product } from 'src/app/data/product';
import { Category } from '../../data/category';
import { Applicationtype } from '../../data/applicationtype';
import { UserserviceService } from '../../Services/userservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-productlist',
  templateUrl: './display-productlist.component.html',
  styleUrls: ['./display-productlist.component.css']
})
export class DisplayProductlistComponent {
  public productList: Product[]=[];
  public CategoryList: Category[]=[];
  public applicationList: Applicationtype[]=[];
  public id:number = 0;

  constructor(public ProductServiceService:ProductServiceService,private UserserviceService:UserserviceService,private router:Router) {
    if(!UserserviceService.getuserloginstatus() && !UserserviceService.isadmin){
      router.navigate(['/Login']);
    }  
    this.productList =ProductServiceService.getProduct();
    this.CategoryList=ProductServiceService.getcategory();
    this.applicationList=ProductServiceService.getapplication();
    console.log(this.productList)
  }
  DeleteProduct(){
   
    if(this.id!==undefined)
    {
    this.ProductServiceService.deleteproduct(this.id);
    const dele=document.getElementById("conform");
    if(dele!= undefined)
    dele.style.display='block';
    }
    const dele=document.getElementById("deleteproduct");
    if(dele!= undefined)
    dele.style.display='none';
  }
  openmodel(id:number|undefined){
    if(id!=undefined)
    this.id=id;
    const dele=document.getElementById("deleteproduct");
    if(dele!= undefined)
    dele.style.display='block';
    
  }
  closemodel(){
    const dele=document.getElementById("deleteproduct");
    if(dele!= undefined)
    dele.style.display='none';
    const dele1=document.getElementById("conform");
    if(dele1!= undefined)
    dele1.style.display='none';
  }
}
