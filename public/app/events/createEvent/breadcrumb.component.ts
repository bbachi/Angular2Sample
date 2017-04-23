import {Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'rc-events-breadcrumb',
    templateUrl: 'app/events/createEvent/breadcrumb.component.html',
    styleUrls: ['app/events/createEvent/breadcrumb.component.css']
})
export class BreadCrumbComponent implements OnInit {

    @Input() pageNumber: number;
    page1: boolean = false;
    page2: boolean = false;
    page3: boolean = false;

    ngOnInit() {
        console.log('page number::::::::' + this.pageNumber);
        if (this.pageNumber == 1) { this.page1 = true; }
        if (this.pageNumber == 2) { this.page2 = true; }
        if (this.pageNumber == 3) { this.page3 = true; }
        console.log(this.page1);
    }
 }