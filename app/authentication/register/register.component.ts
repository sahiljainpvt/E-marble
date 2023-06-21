import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/data/user';
import { UserserviceService } from 'src/app/Services/userservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  newUser: any;

  constructor(public dataservice: UserserviceService,public router:Router) {}

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });
  
  onSubmit() {
    const name: string = this.registerForm.get('name')?.value ?? '';
    const email: string = this.registerForm.get('email')?.value ?? '';
    const phone: string = this.registerForm.get('phone')?.value ?? '';
    const password: string = this.registerForm.get('password')?.value ?? '';
    const confirmPassword: string = this.registerForm.get('confirmPassword')?.value ?? '';

    this.newUser = new User(0,name, email, phone, password,false);
    console.log(this.registerForm.value);
    this.dataservice.addUser(this.newUser);
    this.router.navigate(['/Login']);
    console.log(this.dataservice.getUData());
  }
}
