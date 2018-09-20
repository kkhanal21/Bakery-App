import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse, HttpRequest, HttpEvent } from '@angular/common/http';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';

declare var jQuery: any;
declare var $: any;
declare var MasterSlider: any;

@Component({
  selector: 'app-home-slider-container',
  templateUrl: './home-slider-container.component.html',
  styleUrls: ['./home-slider-container.component.css']
})
export class HomeSliderContainerComponent implements OnInit {
  features: any = [];
  constructor(private _http: Http) { }

  ngOnInit() {
    jQuery.getScript("../../../assets/js/custom.js");


    this.getFeatures();
  }

  getFeatures() {
    this._http.get('/featured').toPromise().then(res => {
      this.features = res.json();
    });
   
   // this._http.get('/products/getFeatured').subscribe(res=>{this.features = res.json();});


    // this._http.request(new HttpRequest('GET','api/cake/getfeatures')).subscribe(res=>{
    //   console.log(res)
    // });
  }

}
