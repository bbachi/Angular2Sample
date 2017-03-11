import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { HttpModule } from '@angular/http';
import { CreateEventsComponent, EventService} from './../index';

@NgModule({
    imports: [ CommonModule, HttpModule, FormsModule, ReactiveFormsModule, MyDatePickerModule ],
    declarations: [CreateEventsComponent],
    exports: [CreateEventsComponent],
    providers: [ EventService ]
})
export class CreateEventsModule { }