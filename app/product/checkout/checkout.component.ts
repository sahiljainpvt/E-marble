import { Component } from '@angular/core';
import { Cart } from 'src/app/data/cart';
import { User } from 'src/app/data/user';
import { Product } from 'src/app/data/product';
import { UserserviceService } from '../../Services/userservices.service';
import { ProductServiceService } from '../../Services/product-service.service';
import { Inquiry } from 'src/app/data/inquiry';
import { Router } from '@angular/router';




@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  userid: number=0;
  product:Product[]=[];
  cartlist:Cart[]=[];
  cart:Product[]=[];
  te:Product[]=[];
  user?:User ;
  username?:string;
  useremail?:string;
  userphone?:string;
  inquiry?:Inquiry;

  constructor(public router:Router,public UserserviceService:UserserviceService,public ProductServiceService:ProductServiceService){
    if(!UserserviceService.getuserloginstatus()){
      router.navigate(['/Login']);
    }   
    this.userid=UserserviceService.getuserloginid();
      this.cartlist=UserserviceService.getcart();
      this.product=ProductServiceService.getProduct();
      console.log(this.userid,"dd");
      const temp:Cart[]=this.cartlist.filter(c=>c.UserId===this.userid);
      
      console.log(temp,"dd");
    
        this.cart = this.product.filter((c) => {
      const tempIds = temp.map((i) => i.ProductiD);
      return tempIds.includes(c.Id);
    });
          this.user=UserserviceService.getUser()
          this.username=this.user?.name;
          this.useremail=this.user?.email;
          this.userphone=this.user?.mobile;
        console.log(this.cart);


      




  }
  getInquiry(){
    this.UserserviceService.removecart(this.userid);

    for(let i of this.cart){
    this.inquiry=new Inquiry(0,this.username,this.userphone,this.useremail,i.Id,i.Price,this.userid);
    console.log(this.inquiry);
    this.ProductServiceService.addinquiry(this.inquiry);
    }
    this.router.navigate(['/product/conformation'])
  }

  }
