import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './index';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: SettingsComponent },
  ])],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }