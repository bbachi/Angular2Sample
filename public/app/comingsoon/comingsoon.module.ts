import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComingsoonComponent } from './index';
import { ComingsoonRoutingModule } from './comingsoon-routing.module';

@NgModule({
    imports: [ CommonModule, RouterModule, ComingsoonRoutingModule ],
    declarations: [ ComingsoonComponent ],
    exports: [ ComingsoonComponent ],
    providers: [ ]
})
export class ComingsoonModule { }