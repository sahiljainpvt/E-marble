import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Applicationtype } from 'src/app/data/applicationtype';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { User } from 'src/app/data/user';
import { UserserviceService } from '../../Services/userservices.service';
@Component({
  selector: 'app-createapplication',
  templateUrl: './createapplication.component.html',
  styleUrls: ['./createapplication.component.css']
})
export class CreateapplicationComponent {
  public applicationForm:any;
  public applicationname?: string="";
  public application?:Applicationtype | undefined;
  public id:number=0;
  public applicationlist:Applicationtype[]=[];

  constructor(private ProductServiceService:ProductServiceService,public router:Router,public route:ActivatedRoute,private formBuilder: FormBuilder,public UserserviceService:UserserviceService){
    if(!UserserviceService.getuserloginstatus() && !UserserviceService.isadmin){
      router.navigate(['/Login']);
    }  
    this.applicationlist=ProductServiceService.getapplication();
    this.route.paramMap.subscribe(params =>{
      this.id=Number( params.get('id'));
      console.log(this.id);
    })
      if(this.id!==0){
      this.application=this.ProductServiceService.getapplicatiobyId(this.id);
      console.log(this.application);
      if(this.application!==undefined){
        this.applicationname=this.application.ApplicationName;
      }
    }
  }
  ngOnInit(): void {
    
    this.applicationForm = this.formBuilder.group({
      name: [this.applicationname, Validators.required]
    });
  }
  onSubmit() {
 
    if (this.applicationForm.valid) {
      console.log(this.applicationForm.controls['name'].value);
      if(this.id!==0){
        const temp=this.applicationlist.find(c=>c.ApplicationName?.toLowerCase()===(this.applicationForm.controls['name'].value).toLowerCase())
        if(temp!=undefined){
          alert("duplicate Application type not allowed")
        }
        else{
      this.ProductServiceService.addapplications(new Applicationtype(this.id,this.applicationForm.controls['name'].value))
        this.router.navigate(['/admin/displayapplication'])
        }
      }
    else{
      const temp=this.applicationlist.find(c=>c.ApplicationName?.toLowerCase()===(this.applicationForm.controls['name'].value).toLowerCase())
      if(temp!=undefined){
        alert("duplicate Application type not allowed")
      }
      else{
      this.ProductServiceService.addapplications(new Applicationtype(0,this.applicationForm.controls['name'].value))
      this.router.navigate(['/admin/displayapplication'])
      }
    }
  }


}

}
