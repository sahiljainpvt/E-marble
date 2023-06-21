import { Injectable } from '@angular/core';
import { Product } from '../data/product';
import { Category } from '../data/category';
import { Applicationtype } from '../data/applicationtype';
import { Inquiry } from '../data/inquiry';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  updateproduct:Product | undefined;
  private Product:Product[]=[];
  private category:Category[]=[];
  private application:Applicationtype[]=[];
  private Inquiry:Inquiry[] = [];



  constructor(){
   this.Product=[
                      new Product(1,'Statuary White',"A sister stone to Carrara, Statuary marble features a uniform background and light gray tones with distinctive and more dramatic veining. Its semi translucent white background gives it a shiny, glossy feel, reflects light and provides a radiant finish that enhances any room.",75,"assets/Statuary White.png",1,1,"A sister stone to Carrara, Statuary marble features a uniform background and light gray tones with distinctive"),
                    new Product(2,'Emperador Brown',"Quarried from three regions of Spain, Emperador marble tile comes in different shades of brown, straying from the whites and grays associated with Calacatta and Carrara. It typically exhibits fine grains with irregular veins. Its darker color makes it an ideal choice .",84,"assets/Emperador Brown.png",2,2,"Quarried from three regions of Spain, Emperador marble tile comes in different shades of brown, straying from the whites "),
                    new Product(3,'Travertine beige',"Travertine marble is visibly porous, giving it a more natural and textured look and finish. However, when sanded down and sealed, this marble can be used for interior and exterior walls. Travertine ",90,"assets/Travertine beige.png",1,1,"Travertine marble is visibly porous, giving it a more natural and textured look and finish."),
                    new Product(4,'Calacatta',"One of the most well-known yet rare luxury stones, Calacatta marble is often confused with Carrara since both feature grey veining. However, unlike Carrara, Calacatta showcases bolder and more dramatic veining. Calacatta white marble or Calacatta gold marble are two of the most popular picks.",120,"assets/Calacatta.png",2,2,"One of the most well-known yet rare luxury stones, Calacatta marble is often confused with Carrara since both feature grey veining.")
                    ];
  this.category=[new Category(1,"Statuary"),
                new Category(2,"Emperador"),
                new Category(3,"Travertine")];
this.application=[
                    new Applicationtype(1,"Flooring"),
                    new Applicationtype(2,"Walls")
                  ];
                  this.Inquiry=[
                    new Inquiry(1,"sahil Jain",'1234567890','sahil@gmail.com',1,75,1,"under processing"),
                    new Inquiry(2,"rutvik chavda","123456789",'rutvik@gmail.com',2,84,2,"under processing")
                  ];
}
  
 
  addcategory(category:Category):void{
    if(category.Id){
      const id=this.category.findIndex(c => c.Id==category.Id);
      this.category[id].CategoryName=category.CategoryName;
    }
    else{
      category.Id=this.category.length+1;
      this.category.push(category);
    }
  }
  getcategorybyId(id:number):Category|undefined{
  return this.category.find(c=> c.Id===id);
  }
  deletecategiry(id:number):void{
    const num=this.category.findIndex(c =>  c.Id===id );
    //console.log(num);
    this.category.splice(num,1);
    //console.log(this.category);
  }
  getcategory():any{
    return this.category;

  }
  addapplications(applications:Applicationtype):void{
    if(applications.Id){
      const id=this.category.findIndex(c => c.Id==applications.Id);
      this.application[id].ApplicationName=applications.ApplicationName;
    }
    else{
      applications.Id=this.application.length+1;
      this.application.push(applications);
    }
  }
 
  getapplication():any{
    return this.application;
  }
  getapplicatiobyId(id:number):Applicationtype|undefined{
    return this.application.find(c=> c.Id===id);
    }
  deleteapplicationtype(id:number):void{
    console.log(id);
      const num=this.application.findIndex(c =>  c.Id===id );
      console.log(num);
      this.application.splice(num,1);
      console.log(this.category);
    }

  addinquiry(inquiry:Inquiry):void{
    inquiry.Id=this.Inquiry.length+1;
    console.log(inquiry);
    this.Inquiry.push(inquiry);
    console.log(this.Inquiry,"total")
  

  }
  


  getinquirylist():Inquiry[]{
    return this.Inquiry;
  }
 Addproduct(product:Product):void{
  if(product.Id){
    const id=this.Product.findIndex(c => c.Id==product.Id);
    this.Product[id].Name=product.Name;
    this.Product[id].Description=product.Description;
    this.Product[id].Price=product.Price;
    this.Product[id].CategoryId=product.CategoryId;
    this.Product[id].ApplicationId=product.ApplicationId;
    this.Product[id].Image=product.Image;
    this.Product[id].Shortdescription=product.Shortdescription;
  }
  else{
    product.Id=this.Product.length+1;
    this.Product.push(product);
  }
  }
  getProduct():Product[] {
    return this.Product;
    
  }
  getproductId(id:number):Product|undefined{
    return this.Product.find(c=> c.Id===id);
    }
    deleteproduct(id:number):void{
      const num=this.Product.findIndex(c =>  c.Id===id );
      //console.log(num);
      this.Product.splice(num,1);
      //console.log(this.category);
    }
    updateinquirystatus(id:number,status:string):void{
      this.Inquiry.findIndex(c=> c.Id===id);
      this.Inquiry[id-1].Status=status;

    }
    productavilableforapplications(id:number|undefined):boolean{
      const temp=this.Product.find(c=>c.ApplicationId===id)
      if(temp!=undefined){
        return true;
      }
      return false;
    }
    productavilableforcategory(id:number|undefined):boolean{
      const temp=this.Product.find(c=>c.CategoryId===id)
      if(temp!=undefined){
        return true;
      }
      return false;
    }
  

 
  
}
