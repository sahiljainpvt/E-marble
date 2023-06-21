import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/Services/userservices.service';
import { Cart } from '../../data/cart';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges {
 // loginststus: boolean=false;
 // Cartmumbers: number=0;

  constructor(public userservices:UserserviceService,private router: Router, public userService: UserserviceService) {
   //this.loginststus = this.userservices.getuserloginstatus();
    //this.Cartmumbers=this.
  }
    
    ngOnChanges() {  
      
        
  }  

    
  
  

  
  logout(){
    this.userService.updatelofingstatus(false,0,false);
    
    this.router.navigate(['/']);


    
  }
  
  
  

}

