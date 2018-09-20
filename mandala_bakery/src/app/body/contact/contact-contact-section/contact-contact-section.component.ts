import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var google: any;
@Component({
  selector: 'app-contact-contact-section',
  templateUrl: './contact-contact-section.component.html',
  styleUrls: ['./contact-contact-section.component.css']
})
export class ContactContactSectionComponent implements OnInit {

  lat: number = 27.707795;
  lng: number = 85.327504;

  lat2: number = 40.714728;
  lng2: number = -73.998672;
    

  constructor() { }

  ngOnInit() {    

  }

}
