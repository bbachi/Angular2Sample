import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './index';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ContactUsComponent },
  ])],
  exports: [RouterModule]
})
export class ContactusRoutingModule { }