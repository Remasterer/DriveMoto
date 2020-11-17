import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }
  banners: string[] = ['assets/img/banner.jpg','assets/img/banner.jpg','assets/img/banner.jpg','assets/img/banner.jpg'];
  customOptions: OwlOptions = {
    loop: true,
    items: 1,
    navSpeed: 700,
    navText: ['', ''],
    nav: true
  }
  ngOnInit(): void {
  }

}
