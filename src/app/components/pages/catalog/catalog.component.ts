import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CategoriesService} from "../../../shared/services/categories.service";
import {ICategory} from "../../../shared/interfaces/category.interface";
import { Location } from '@angular/common';
import {Observable} from "rxjs";
import {IProduct} from "../../../shared/interfaces/product.interface";
import {ProductsService} from "../../../shared/services/products.service";
import {IBreadcumb} from "../../../shared/interfaces/breadcumbs.interface";
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  currentCategoryId:number;
  breadcumpsLinks: IBreadcumb[];
  selectedCategory;
  productsOfCategory:Observable<IProduct>;
  constructor(private categoryService: CategoriesService,private productsService: ProductsService,
            private route: ActivatedRoute,private location: Location) {
  }
  ngOnInit(): void {
    this.route.params.forEach((params) => {
      let id = params['id'];
      this.categoryService.getCategoryByName(id).subscribe(
        response => {
          this.selectedCategory = response[0];
          this.getProductsById(this.selectedCategory.id);
          this.breadcumpsLinks = [];
          this.breadcumpsLinks.push({
            linkName:this.selectedCategory.name,
            linkHref:'catalog/' + this.selectedCategory.translate,
          })
        }
      );
    });

  }

  getProductsById(categoryId){
    this.productsOfCategory = this.productsService.getProductsByCategoryId(categoryId);
  }

}
