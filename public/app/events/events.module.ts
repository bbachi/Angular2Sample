import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { AgmCoreModule } from 'angular2-google-maps/core/core-module';
import { HttpModule } from '@angular/http';
import { EventsComponent, EventDetailComponent, EventService} from './index';
import { EventsRoutingModule } from './events-routing.module';

@NgModule({
    imports: [ CommonModule, HttpModule, FormsModule, ReactiveFormsModule, MyDatePickerModule, AgmCoreModule.forRoot(
    {apiKey: 'AIzaSyBZ0ppuSTjLo1HPsuSIrZv9UTJgan8i2Cw', libraries: ['places']}) ],
    declarations: [EventsComponent, EventDetailComponent],
    exports: [EventsComponent, EventDetailComponent],
    providers: [ EventService ]
})
export class EventsModule { }