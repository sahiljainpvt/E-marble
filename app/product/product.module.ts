import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarbledetailsComponent } from './marbledetails/marbledetails.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { ConformationOfinquiryComponent } from './conformation-ofinquiry/conformation-ofinquiry.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {path:'details/:id',component:DetailsComponent},
      {path:'cart',component:CartComponent},
      {path:'checkout',component:CheckoutComponent},
      {path:'conformation',component:ConformationOfinquiryComponent},
    ]
  }
];
@NgModule({
  declarations: [
    MarbledetailsComponent,
    DetailsComponent,
    CartComponent,
    CheckoutComponent,
    ConformationOfinquiryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    RouterModule.forChild(routes)

  ],
  exports:[
    MarbledetailsComponent]
})
export class ProductModule { }
