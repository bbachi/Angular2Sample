import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComingsoonComponent } from './index';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '**', component: ComingsoonComponent },
  ])],
  exports: [RouterModule]
})
export class ComingsoonRoutingModule { }