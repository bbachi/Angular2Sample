import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent, SignUpComponent } from './index';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
    imports: [ CommonModule, HttpModule, RouterModule, FormsModule, ReactiveFormsModule, UserRoutingModule ],
    declarations: [ LoginComponent, SignUpComponent ],
    exports: [ LoginComponent, SignUpComponent ],
    providers: [ ]
})
export class UserModule { }