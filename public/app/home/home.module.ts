import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { AgmCoreModule } from 'angular2-google-maps/core/core-module';
import { HttpModule } from '@angular/http';
import { CarouselModule, PopoverModule } from 'ngx-bootstrap';
import { HomeComponent, CarouselComponent, NoteComponent, VideoComponent, FindEventsComponent, FeaturesComponent, FLIconsComponent } from './index';

@NgModule({
    imports: [ RouterModule, CommonModule, HttpModule, FormsModule, ReactiveFormsModule, MyDatePickerModule, AgmCoreModule.forRoot(
    {apiKey: 'AIzaSyBZ0ppuSTjLo1HPsuSIrZv9UTJgan8i2Cw', libraries: ['places']}), CarouselModule.forRoot(), PopoverModule.forRoot() ],
    declarations: [HomeComponent, CarouselComponent, NoteComponent, VideoComponent, FindEventsComponent, FeaturesComponent, FLIconsComponent ],
    exports: [ HomeComponent ],
    providers: [ ]
})
export class HomeModule { }