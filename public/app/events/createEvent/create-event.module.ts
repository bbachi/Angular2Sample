import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { HttpModule } from '@angular/http';
import { CreateEventsComponent, CreateEventVerifyComponent, CreateEventConfirmComponent, BreadCrumbComponent} from './index';
import { EventService } from './../shared/event.servcie';
import { CreateEventRoutingModule } from './create-events-routing.module';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

@NgModule({
    imports: [ CommonModule, HttpModule, FormsModule, ReactiveFormsModule, MyDatePickerModule, CreateEventRoutingModule ],
    declarations: [CreateEventsComponent, CreateEventVerifyComponent, CreateEventConfirmComponent, BreadCrumbComponent, FileSelectDirective],
    exports: [CreateEventsComponent,CreateEventVerifyComponent,CreateEventConfirmComponent],
    providers: [ EventService ]
})
export class CreateEventsModule { }