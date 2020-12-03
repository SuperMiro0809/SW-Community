import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserService } from './user.service';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent, 
    ProfileComponent, CartComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
