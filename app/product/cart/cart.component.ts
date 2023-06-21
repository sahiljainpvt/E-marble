import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../Services/userservices.service';
import { ProductServiceService } from '../../Services/product-service.service';
import { Product } from 'src/app/data/product';
import { Cart } from 'src/app/data/cart';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  userid: number=0;
  product:Product[]=[];
  cartlist:Cart[]=[];
  cart:Product[]=[];
  te:Product[]=[];

  constructor(public UserserviceService:UserserviceService,public ProductServiceService:ProductServiceService,private router: Router){
    if(!UserserviceService.getuserloginstatus()){
      router.navigate(['/Login']);
    }  
    


  }
  ngOnInit(): void {
    this.userid=this.UserserviceService.getuserloginid();
    this.cartlist=this.UserserviceService.getcart();
    this.product=this.ProductServiceService.getProduct();
    console.log(this.userid,"dd");
   
    const temp:Cart[]=this.cartlist.filter(c=>c.UserId===this.userid);
    
    console.log(temp,"dd");
  
      this.cart = this.product.filter((c) => {
    const tempIds = temp.map((i) => i.ProductiD);
    return tempIds.includes(c.Id);
  });
        
      console.log(this.cart,);
  }
  Removefromcart(Id:number|undefined):void {
    console.log(Id);
    if(Id!==undefined)
      this.UserserviceService.removecarts(this.userid,Id);
      this.router.navigate(['/']);
    
  }
}
