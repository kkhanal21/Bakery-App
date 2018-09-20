import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery.getScript("../../../assets/js/custom.js");}

}
