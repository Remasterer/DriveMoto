import {Component, Input, OnInit} from '@angular/core';
import {CategoriesService} from "../../shared/services/categories.service";
import {IProductCategory} from "../../shared/interfaces/product-category.interface";
import {IProduct} from "../../shared/interfaces/product.interface";
import {NguCarouselStore} from "@ngu/carousel";
import {OwlOptions} from "ngx-owl-carousel-o";
import {BehaviorSubject, combineLatest} from "rxjs";
import {switchMap} from "rxjs/operators";
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-products-slider',
  templateUrl: './products-slider.component.html',
  styleUrls: ['./products-slider.component.scss']
})
export class ProductsSliderComponent implements OnInit {
  @Input() productsSelection;
  @Input() sliderHeading: string;
  productCategories: IProductCategory[];
  categoryIdFilter: BehaviorSubject<number|null>;

  constructor(private categoryService: CategoriesService , afs: AngularFirestore) {
    this.categoryIdFilter = new BehaviorSubject(null);
    this.productsSelection = combineLatest(
      this.categoryIdFilter,
    ).pipe(
      switchMap(([categoryId]) =>
        afs.collection('products', ref => {
          let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (categoryId) { query = query.where('categoryId', '==', categoryId) };
          return query;
        }).valueChanges()
      )
    );
    this.categoryIdFilter.next(1);
  }
  ngOnInit(): void {
    this.getProductCategories();
  }
  getProductCategories(): void {
    this.categoryService.getProductCategories()
      .subscribe(categories=> this.productCategories = categories);
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

}
