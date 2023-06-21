import { Component, OnInit } from '@angular/core';
import { UserserviceService } from './Services/userservices.service';
import { Router ,NavigationStart} from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'E-Marble_Inquiry';
  show:boolean = true;
  


  // constructor(public UserserviceService:UserserviceService){
  //   this.show=this.UserserviceService.getshowstatus()
  //   console.log(this.show);
  // }
  // studentData=null;

  constructor(public _Router: Router,private _obj:UserserviceService) {

    //this.url = this._Router.url;

     _Router.events.forEach((event) => {

      if (event instanceof NavigationStart) {

        if (event['url'] == '/Login' ) {

          this.show = false;

        } 
        else if (event['url'] == '/Register'){
          this.show = false;

        }
        else {

          // console.log("NU")

          this.show = true;

        }

      }

    });
  }

}
