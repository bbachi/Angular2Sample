import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFreelancerComponent } from './create-freelancer.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: CreateFreelancerComponent }
  ])],
  exports: [RouterModule]
})
export class CreateFreelancerRoutingModule { }