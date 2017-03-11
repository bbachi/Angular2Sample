import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { HttpModule } from '@angular/http';
import { FreelancerComponent, CreateFreelancerComponent, FreelancerProfileComponent, FreelancerService } from './index';
import { FreelancerRoutingModule } from './freelancer-routing.module';

@NgModule({
    imports: [ CommonModule, HttpModule, FormsModule, ReactiveFormsModule, MyDatePickerModule, FreelancerRoutingModule ],
    declarations: [FreelancerComponent, CreateFreelancerComponent, FreelancerProfileComponent ],
    exports: [FreelancerComponent, CreateFreelancerComponent, FreelancerProfileComponent ],
    providers: [ FreelancerService ]
})
export class FreelancerModule { }