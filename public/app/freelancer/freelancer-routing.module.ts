import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FreelancerComponent } from './freelancers/freelancer.component';
import { FreelancerProfileComponent } from './profile/freelancer-profile.component';
import { CreateFreelancerComponent } from './createfreelancer/create-freelancer.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: FreelancerComponent },
    { path: 'profile', component: FreelancerProfileComponent },
  ])],
  exports: [RouterModule]
})
export class FreelancerRoutingModule { }