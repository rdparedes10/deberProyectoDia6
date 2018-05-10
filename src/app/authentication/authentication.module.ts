import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from '../authentication-guard';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],
  declarations: [LoginComponent, SignUpComponent, UsersComponent],
  exports:[AuthenticationRoutingModule],
  providers:[AuthGuard]
})
export class AuthenticationModule { }
