import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { HttpModule } from '@angular/http';
import { CreateEventsComponent, EventService} from './../index';
import { CreateEventRoutingModule } from './create-events-routing.module';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

@NgModule({
    imports: [ CommonModule, HttpModule, FormsModule, ReactiveFormsModule, MyDatePickerModule, CreateEventRoutingModule ],
    declarations: [CreateEventsComponent,FileSelectDirective],
    exports: [CreateEventsComponent],
    providers: [ EventService ]
})
export class CreateEventsModule { }