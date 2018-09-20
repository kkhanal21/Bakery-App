import { Component, OnInit } from '@angular/core';
import { MenuService } from "../../../_services/menu.service";
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-menu-product-section',
  templateUrl: './menu-product-section.component.html',
  styleUrls: ['./menu-product-section.component.css']
})
export class MenuProductSectionComponent implements OnInit {
  array = [];
  constructor(private menuSevice: MenuService) { }

  ngOnInit() {
    // jQuery.getScript("../../../assets/js/custom.js");
    // this.array = this.formatArr(this.list);
    this.getAll();
    // setTimeout(() => {
    //   $(document).ready(function (e) {
    //     $('#products-slider-1').owlCarousel({
    //       singleItem: true
    //     });
    //   })
    // }, 5000);

  }

  getAll() {
    this.menuSevice.getAll()
      .toPromise().then(res => {

        this.array = this.formatArr(res);
        console.log(this.array);
        setTimeout(() => {
          $('#products-slider-1').owlCarousel({
            singleItem: true
          });

          var on_scroll_anims = $('.onscroll-animate');
          for (var i = 0; i < on_scroll_anims.length; i++) {
            var element = on_scroll_anims.eq(i);
            element.one('inview', function (event, visible) {
              var el = $(this);
              var anim = (el.data("animation") !== undefined) ? el.data("animation") : "fadeIn";
              var delay = (el.data("delay") !== undefined) ? el.data("delay") : 200;

              var timer = setTimeout(function () {
                el.addClass(anim);
                clearTimeout(timer);
              }, delay);
            });
          }

        }, 500);

      })
  }

  createGroupedArray(arr, chunkSize) {
    var groups = [], i;
    for (i = 0; i < arr.length; i += chunkSize) {
      groups.push(arr.slice(i, i + chunkSize));
    }
    return groups;
  }

  formatArr(arr) {
    var chunk1 = this.createGroupedArray(arr, 8); // 24 => 8 8 8
    var jarr = [], j;
    for (j = 0; j < chunk1.length; j++) {
      jarr.push(this.createGroupedArray(chunk1[j], 2));
    }
    var karr = [], k;
    for (k = 0; k < jarr.length; k++) {
      var l;
      karr.push(this.createGroupedArray(jarr[k], 2));
    }
    return karr;
  }

}
