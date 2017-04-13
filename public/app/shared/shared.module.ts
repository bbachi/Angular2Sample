import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FooterComponent, HeaderComponent, GoogleAPIService, EmailService } from './index';

@NgModule({
    imports: [ CommonModule, HttpModule, RouterModule ],
    declarations: [ FooterComponent, HeaderComponent ],
    exports: [ FooterComponent, HeaderComponent ],
    providers: [ GoogleAPIService, EmailService ]
})
export class SharedModule { }