import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../../_services/product.service";
declare var $: any;

@Component({
  selector: 'app-home-products-section',
  templateUrl: './home-products-section.component.html',
  styleUrls: ['./home-products-section.component.css']
})
export class HomeProductsSectionComponent implements OnInit {
  page = 1;
  array = [];
  isLoading: boolean = true;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAll(this.page);
  }

  getAll(page) {
    this.productService.getAll(page)
      .toPromise()
      .then(res => {
        this.array = this.formatArr(res);
      this.isLoading = false;
        setTimeout(() => {
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
      });
  }

  createGroupedArray(arr, chunkSize) {
    var groups = [], i;
    for (i = 0; i < arr.length; i += chunkSize) {
      groups.push(arr.slice(i, i + chunkSize));
    }
    return groups;
  }

  formatArr(arr) {
    var chunk1 = this.createGroupedArray(arr, 4); // 8 => 4 4 
    var jarr = [], j;
    for (j = 0; j < chunk1.length; j++) {
      jarr.push(this.createGroupedArray(chunk1[j], 2)); // 4 => 2 2
    }
    return jarr;
  }
  getPaginated(type) {
    if (type == 1) {
      this.page += 1;
    } else {
      this.page -= 1;
    }
    this.isLoading = true;
    console.log(this.page);
    setTimeout(() => {
      this.getAll(this.page);
    }, 5000);

  }
}
