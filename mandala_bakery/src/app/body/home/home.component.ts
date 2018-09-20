import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;
declare var MasterSlider: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery.getScript("../../../assets/js/custom.js");
    setTimeout(() => {
      $(document).ready(function (e) {
        /* Main slider */
        if (typeof MasterSlider == 'function') {
          var slider = new MasterSlider();
          slider.setup('masterslider', {
            width: 1250,    // slider standard width
            height: 450,    // slider standard height
            view: 'basic',
            layout: 'fillwidth',
            speed: 20
          });
          slider.control('bullets', { autohide: false });
          slider.control('arrows');
        }
      });
    }, 1000);
  }
}
