import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { ColorComponent } from './color/color.component';
import { DataComponent } from './data/data.component';
import { LoginComponent } from './login/login.component';
import { RealloginComponent } from './reallogin/reallogin.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    DataComponent,
    AppComponent,
    ColorComponent,
    LoginComponent,
    RealloginComponent,
    ForgetpasswordComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgFor,CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
