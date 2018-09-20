import { Component, OnInit } from '@angular/core';
// import slide in/out animation
import { slideInOutAnimation } from '../../../_animations/index';

@Component({
  selector: 'app-home-product-detail',
  templateUrl: './home-product-detail.component.html',
  styleUrls: ['./home-product-detail.component.css'],
  // make slide in/out animation available to this component
  animations: [slideInOutAnimation],
  // attach the slide in/out animation to the host (root) element of this component
  host: { '[@slideInOutAnimation]': 'home' }
})
export class HomeProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
