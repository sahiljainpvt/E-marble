import { Component } from '@angular/core';
import { ProductServiceService } from '../../Services/product-service.service';
import { Router } from '@angular/router';
import { UserserviceService } from '../../Services/userservices.service';

@Component({
  selector: 'app-conformation-ofinquiry',
  templateUrl: './conformation-ofinquiry.component.html',
  styleUrls: ['./conformation-ofinquiry.component.css']
})
export class ConformationOfinquiryComponent {
  constructor(private UserserviceService:UserserviceService,private router:Router){
    if(!UserserviceService.getuserloginstatus()){
      router.navigate(['/Login']);
    } 

  }

}
