import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { HttpModule } from '@angular/http';
import { PaymentComponent } from './index';
import { BillingRoutingModule } from './billing.routing.module';

@NgModule({
    imports: [ RouterModule, CommonModule, HttpModule, FormsModule, ReactiveFormsModule, BillingRoutingModule ],
    declarations: [ PaymentComponent ],
    exports: [ PaymentComponent ],
    providers: [ ]
})
export class BillingModule { }