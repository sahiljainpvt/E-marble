import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Applicationtype } from 'src/app/data/applicationtype';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { UserserviceService } from '../../Services/userservices.service';

@Component({
  selector: 'app-displayapplication',
  templateUrl: './displayapplication.component.html',
  styleUrls: ['./displayapplication.component.css']
})
export class DisplayapplicationComponent {
  public aplication:Applicationtype[]=[];
  public id:number = 0;
  constructor(private ProductServiceService:ProductServiceService,private UserserviceService:UserserviceService,private router:Router){
    //this.Category=ProductServiceService.getcategory();
    if(!UserserviceService.getuserloginstatus() && !UserserviceService.isadmin){
      router.navigate(['/Login']);
    }  
    console.log(this.aplication);
  }
  ngOnInit(): void {
    this.aplication=this.ProductServiceService.getapplication();
  }
  deleteapplication(){
    
    if(this.ProductServiceService.productavilableforapplications(this.id)){
        this.openalert();
    }
    else{
    if(this.id!==undefined)
    {
      this.ProductServiceService.deleteapplicationtype(this.id);
      this.conformalert();
    }
  }
  }
  closemodel(){
    const dele=document.getElementById("deleteapp");
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
    const dele=document.getElementById("deleteapp");
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

