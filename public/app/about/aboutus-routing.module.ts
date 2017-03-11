import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './index';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: AboutComponent },
  ])],
  exports: [RouterModule]
})
export class AboutusRoutingModule { }