import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './index';

const billingRoutes: Routes = [
     { path: 'payment.htm', component: PaymentComponent },
    ]

@NgModule({
  imports: [RouterModule.forChild(billingRoutes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }