import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './sign-up.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent }
  ])],
  exports: [RouterModule]
})
export class UserRoutingModule {}