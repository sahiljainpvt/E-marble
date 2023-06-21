import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/data/product';
import { UserserviceService } from '../../Services/userservices.service';




@Component({
  selector: 'app-marbledetails',
  templateUrl: './marbledetails.component.html',
  styleUrls: ['./marbledetails.component.css']
})
export class MarbledetailsComponent {
  productdata:Product[]=[];
  data:Product[] = [];
  categorydata:any=[{}];
  applications:any=[{}];
  constructor(public Productdataservice:ProductServiceService,private Router:Router,public UserserviceService:UserserviceService){
   
        this.productdata = Productdataservice.getProduct();
        this.categorydata=Productdataservice.getcategory();
        this.applications=Productdataservice.getapplication();
        this.data=this.productdata.filter(each=>1==1);
        console.log(this.data)
        
  }

  viewdetails(id:number|undefined) {
    this.Router.navigate(['/product/details/'+id])
  }
}
