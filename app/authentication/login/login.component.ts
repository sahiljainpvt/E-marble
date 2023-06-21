import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/data/user';
import { UserserviceService } from 'src/app/Services/userservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loguser: User[] = [];
  data: User[] = [];
  showSuccessMessage: boolean = false;
  showErrorMessage: boolean = false;

  constructor(private userservices: UserserviceService, private UserserviceService: UserserviceService, public router: Router) {
    this.UserserviceService.updateshowstatus(false);
    this.data = this.UserserviceService.getUData();
  }

  loginform = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  Loginuser() {
    if (this.loginform.invalid) {
      return;
    }

    const username = this.loginform.get('username')?.value;
    const password = this.loginform.get('password')?.value;
    const user = this.data.find(u => u.username === username && u.password === password);

    if (user) {
      this.showSuccessMessage = true;
      this.showErrorMessage = false;

      // Perform any necessary login logic here
      if(user.Id!==undefined && user.Isadmin!==undefined)
      this.userservices.updatelofingstatus(true, user.Id, user.Isadmin);
      this.router.navigate(['/']);
    } else {
      this.showSuccessMessage = false;
      this.showErrorMessage = true;
    }
  }
}
