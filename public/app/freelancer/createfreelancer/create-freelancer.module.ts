import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { HttpModule } from '@angular/http';
import { FreelancerComponent, CreateFreelancerComponent, FreelancerProfileComponent, FreelancerService } from './../index';
import { CreateFreelancerRoutingModule } from './createfreelancer-routing.module';

@NgModule({
    imports: [ CommonModule, HttpModule, FormsModule, ReactiveFormsModule, MyDatePickerModule, CreateFreelancerRoutingModule ],
    declarations: [FreelancerComponent, CreateFreelancerComponent, FreelancerProfileComponent ],
    exports: [FreelancerComponent, CreateFreelancerComponent, FreelancerProfileComponent ],
    providers: [ FreelancerService ]
})
export class CreateFreelancerModule { }