import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../../Services/product-service.service';
import { Inquiry } from 'src/app/data/inquiry';
import { Product } from 'src/app/data/product';
import { UserserviceService } from '../../Services/userservices.service';
import { User } from 'src/app/data/user';

@Component({
  selector: 'app-manage-inquiry',
  templateUrl: './manage-inquiry.component.html',
  styleUrls: ['./manage-inquiry.component.css']
})
export class ManageInquiryComponent {
  public Inquiry: Inquiry[]=[];
  public Product: Product[] = [];
  constructor(public router: Router,public ProductServiceService:ProductServiceService,private UserserviceService:UserserviceService){
    if(!UserserviceService.getuserloginstatus() && !UserserviceService.isadmin){
      router.navigate(['/Login']);
    }  
    this.Inquiry=ProductServiceService.getinquirylist();
    this.Product=ProductServiceService.getProduct();

  }
  

}
