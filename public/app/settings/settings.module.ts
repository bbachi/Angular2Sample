import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './index';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
    imports: [ CommonModule, RouterModule, SettingsRoutingModule ],
    declarations: [ SettingsComponent ],
    exports: [ SettingsComponent ],
    providers: [ ]
})
export class SettingsModule { }