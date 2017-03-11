import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactUsComponent } from './index';
import { ContactusRoutingModule } from './contact-us-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
    imports: [ CommonModule, RouterModule, FormsModule, ReactiveFormsModule, ContactusRoutingModule, SharedModule ],
    declarations: [ ContactUsComponent ],
    exports: [ ContactUsComponent ],
    providers: [ ]
})
export class ContactUsModule { }