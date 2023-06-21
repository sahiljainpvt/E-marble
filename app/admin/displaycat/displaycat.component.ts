import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/data/category';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { UserserviceService } from '../../Services/userservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displaycat',
  templateUrl: './displaycat.component.html',
  styleUrls: ['./displaycat.component.css']
})
export class DisplaycatComponent implements OnInit {
  public id:number = 0;
  public Category:Category[]=[];
  constructor(private ProductServiceService:ProductServiceService,private UserserviceService:UserserviceService,private router:Router){
    if(!UserserviceService.getuserloginstatus() && !UserserviceService.isadmin){
      router.navigate(['/Login']);
    }  
    //this.Category=ProductServiceService.getcategory();
    console.log(this.Category);
  }
  ngOnInit(): void {
    this.Category=this.ProductServiceService.getcategory();
  }
  deletecategory(){
   
      if(this.ProductServiceService.productavilableforcategory(this.id)){
        this.openalert();
      }
      else{
    if(this.id!==undefined)
    {
      this.ProductServiceService.deletecategiry(this.id);
      this.conformalert();
    }
  }
  
}
closemodel(){
  const dele=document.getElementById("deletecat");
  if(dele!= undefined)
  dele.style.display='none';
  const dele1=document.getElementById("conform");
  if(dele1!= undefined)
  dele1.style.display='none';
  const dele2=document.getElementById("Notallowed");
  if(dele2!= undefined)
  dele2.style.display='none';
}
openModel(id:number|undefined) {
  if(id!=undefined)
    this.id=id;
    const dele=document.getElementById("deletecat");
    if(dele!= undefined)
    dele.style.display='block';

}
openalert(){
  const dele=document.getElementById("Notallowed");
  if(dele!= undefined)
    dele.style.display='block';
}
conformalert(){
  const dele1=document.getElementById("conform");
  if(dele1!= undefined)
  dele1.style.display='block';
}
}
