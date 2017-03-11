import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AboutComponent } from './index';
import { AboutusRoutingModule } from './aboutus-routing.module';

@NgModule({
    imports: [ CommonModule, HttpModule, RouterModule, FormsModule, ReactiveFormsModule, AboutusRoutingModule ],
    declarations: [ AboutComponent ],
    exports: [ AboutComponent ],
    providers: [ ]
})
export class AboutUsModule { }