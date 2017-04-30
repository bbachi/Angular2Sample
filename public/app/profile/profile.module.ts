import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { HttpModule } from '@angular/http';
import { MyProfileComponent } from './index';
import { ProfileRoutingModule } from './profile.routing.module';

@NgModule({
    imports: [ RouterModule, CommonModule, HttpModule, FormsModule, ReactiveFormsModule, ProfileRoutingModule ],
    declarations: [ MyProfileComponent ],
    exports: [ MyProfileComponent ],
    providers: [ ]
})
export class ProfileModule { }