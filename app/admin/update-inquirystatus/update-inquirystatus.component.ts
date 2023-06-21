import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserserviceService } from '../../Services/userservices.service';


@Component({
  selector: 'app-update-inquirystatus',
  templateUrl: './update-inquirystatus.component.html',
  styleUrls: ['./update-inquirystatus.component.css']
})
export class UpdateInquirystatusComponent {
  inquiryForm!: FormGroup; 
  private id:number=0;
  // Add the "!" operator to indicate that the property will be initialized

  constructor(private formBuilder: FormBuilder,private ProductServiceService:ProductServiceService,public router:Router,public route:ActivatedRoute,private UserserviceService:UserserviceService) {
    
 
    if(!UserserviceService.getuserloginstatus() && !UserserviceService.isadmin){
      router.navigate(['/Login']);
    }  
    this.route.paramMap.subscribe(params =>{
      this.id=Number( params.get('id'));
  })
}

  ngOnInit() {
    this.inquiryForm = this.formBuilder.group({
      status: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.inquiryForm.valid) {
      this.ProductServiceService.updateinquirystatus(this.id,this.inquiryForm.controls['status'].value)
      this.router.navigate(['/admin/manage-inquiry'])
      
    }
  }

}

