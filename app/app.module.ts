
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationModule } from './authentication/authentication.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderFooterModule } from './header-footer/header-footer.module';
import { ProductModule } from './product/product.module';
//import { AdminComponent } from './admin/admin/admin.component';
import { DisplaycatComponent } from './admin/displaycat/displaycat.component';
import { AdminModule } from './admin/admin.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    AuthenticationModule,
    ReactiveFormsModule,
    HeaderFooterModule,
    ProductModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
