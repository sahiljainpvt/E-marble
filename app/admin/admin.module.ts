
import { CommonModule } from '@angular/common';
import { DisplaycatComponent } from './displaycat/displaycat.component';
import { CreatecatComponent } from './createcat/createcat.component';
import { RouterModule, Routes } from '@angular/router';
//import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayapplicationComponent } from './displayapplication/displayapplication.component';
import { CreateapplicationComponent } from './createapplication/createapplication.component';
import { DisplayProductlistComponent } from './display-productlist/display-productlist.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ManageInquiryComponent } from './manage-inquiry/manage-inquiry.component';
import { NgModule } from '@angular/core';
import { UpdateInquirystatusComponent } from './update-inquirystatus/update-inquirystatus.component';

import { HttpClientModule } from '@angular/common/http';
import { createApplication } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    children: [
      {path:'createproduct/:id',component:CreateProductComponent},
      { path: 'createapplication/:id', component: CreateapplicationComponent },
      { path: 'createcat/:id', component: CreatecatComponent },
      { path: 'displayproductlist', component: DisplayProductlistComponent },
      { path: 'displayapplication', component: DisplayapplicationComponent },
      { path: 'displaycat', component: DisplaycatComponent },
      { path: 'manage-inquiry', component: ManageInquiryComponent },
      { path: 'updateinquirystatus/:id', component: UpdateInquirystatusComponent },

      

      




    ]
  }
];

@NgModule({
  declarations: [
    DisplaycatComponent,
    CreatecatComponent,
    DisplayapplicationComponent,
    CreateapplicationComponent,
    DisplayProductlistComponent,
    CreateProductComponent,
    ManageInquiryComponent,
    UpdateInquirystatusComponent,
 

    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports:
  [DisplaycatComponent,
  DisplayProductlistComponent]
})
export class AdminModule {
  constructor(){
    console.log("admin midules")
  }
 }
