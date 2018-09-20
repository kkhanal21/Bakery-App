import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $:any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery.getScript("../../../assets/js/custom.js");
    
  }

}
