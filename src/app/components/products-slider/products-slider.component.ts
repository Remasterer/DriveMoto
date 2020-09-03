import {Component, Directive, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoriesService} from "../../shared/services/categories.service";
import {IProductCategory} from "../../shared/interfaces/product-category.interface";
import {IProduct} from "../../shared/interfaces/product.interface";
import {NguCarouselStore} from "@ngu/carousel";
import {OwlOptions} from "ngx-owl-carousel-o";
import {BehaviorSubject, combineLatest, Observable} from "rxjs";
import {switchMap} from "rxjs/operators";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {ProductsService} from "../../shared/services/products.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-products-slider',
  templateUrl: './products-slider.component.html',
  styleUrls: ['./products-slider.component.scss']
})

export class ProductsSliderComponent implements OnInit {
  @Output() onCreate: EventEmitter<any> = new EventEmitter<any>();
  @Input() productsSelection;
  @Input() sliderHeading: string;
  productCategories: Observable<any[]>;
  productsFilteredByCategory: Observable<any[]>;
  constructor(private categoryService: CategoriesService , private productsService: ProductsService) {

  }
  ngOnInit(): void {
    this.getProductCategories();
    this.productsFilteredByCategory = this.productsService.getProductsByCategoryId(1);
  }
  getProductCategories(): void {
    this.productCategories = this.categoryService.getCategories();
  }
  getProductsByCategory(categoryId){
    this.productsFilteredByCategory = this.productsService.getProductsByCategoryId(categoryId);
  }
  changeFilteredProducts($event){
    this.getProductsByCategory($event)
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  selected = new FormControl(0);

}
