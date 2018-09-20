import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.css']
})
export class AdminNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var nav_top = $('#nav-top');
    $('#menu-button').on('click', function (e) {
      nav_top.stop().slideToggle();
    });

    /* Re-show menu on resize if it was hidden by js */
    var menu_button_container_el = $('.menu-button-container');
    $(window).resize(function (e) {
      if ((menu_button_container_el.css('display') == "none") && (nav_top.css('display') == "none"))
        nav_top.stop().slideDown();
    });
    /* Top menu switch */
    var page_header_el = $('.page-header');
    $(window).scroll(function (e) {
      if ($(window).scrollTop() >= 165) {
        page_header_el.addClass('fixed-header');
      }
      else if (page_header_el.hasClass('fixed-header')) {
        page_header_el.removeClass('fixed-header');
      }
    });
  }

}
