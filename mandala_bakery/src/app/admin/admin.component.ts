import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery.getScript("../../../assets/js/custom.js");  
  }
}
