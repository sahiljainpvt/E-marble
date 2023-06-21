import { Component } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { ProductServiceService } from '../../Services/product-service.service';
import { UserserviceService } from '../../Services/userservices.service';
import { Product } from 'src/app/data/product';
import { Cart } from 'src/app/data/cart';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  private id:number = 0;
  private userid:number=0;
  public loginstatus:boolean = false;
  //public userid?:number=0;
  private productdata:Product[] = [];
  public product:any;
  public status:boolean = false;
  private application:any;
  private cart:Cart[]=[];
  private category:any;
  private tempcart?:Cart;
  constructor(private ProductServiceService:ProductServiceService,public useServices:UserserviceService, public route:ActivatedRoute,private router:Router,){
    if(!useServices.getuserloginstatus()){
      router.navigate(['/Login']);
    } 
    this.route.paramMap.subscribe(params =>{
      this.id=Number( params.get('id'));
    })
     this.loginstatus=useServices.getuserloginstatus();
    this.userid=useServices.getuserloginid();
    this.productdata=ProductServiceService.getProduct();
    this.application=ProductServiceService.getapplication();
    this.category=ProductServiceService.getcategory();
    this.product=this.productdata.find((product: any) => product.Id === this.id);
    this.cart=this.useServices.getcart();

    this.tempcart=this.cart.find(c=>c.ProductiD==this.product.Id && c.UserId==this.userid);
    if(this.tempcart==undefined){
      this.status=true;
    }
  }
  Addtocart(id?:number) {
    console.log("inside");
    this.useServices.addcart(new Cart(0,this.userid,id))
    this.shoealert()
  }
  removetocart(id?:number){
    if(id!==undefined)
    this.useServices.removecarts(this.userid,id);
    this.showremovealert();
   
  }
  gotocart(){
    this.router.navigate(['/product/cart']);

  }
  gotohome(){
    this.router.navigate(['/']);

  }
  showremovealert(){
    const dele1=document.getElementById("removealert");
    if(dele1!= undefined)
    dele1.style.display='block';
  }
  shoealert(){
    const dele=document.getElementById("alert");
    if(dele!= undefined)
    dele.style.display='block';
  }
  closemodel(){
    const dele=document.getElementById("alert");
    if(dele!= undefined)
    dele.style.display='none';
    const dele1=document.getElementById("removealert");
    if(dele1!= undefined)
    dele1.style.display='none';
  }

}
