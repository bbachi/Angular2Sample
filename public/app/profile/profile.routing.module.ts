import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyProfileComponent } from './index';

const profileRoutes: Routes = [
     { path: 'myprofile.htm', component: MyProfileComponent },
    ]

@NgModule({
  imports: [ RouterModule.forChild(profileRoutes) ],
  exports: [ RouterModule ]
})
export class ProfileRoutingModule { }