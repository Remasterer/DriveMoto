import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../shared/interfaces/product.interface";
import {Product} from "../../shared/models/product.model";
import {Observable} from "rxjs";
import {AngularFireDatabase} from "@angular/fire/database";
import {ProductsService} from "../../shared/services/products.service";
import {CategoriesService} from "../../shared/services/categories.service";
import {ICategory} from "../../shared/interfaces/category.interface";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  @Input() products

  constructor(private categoryService: CategoriesService,private productsService: ProductsService,
              private route: ActivatedRoute,private location: Location) {

  }

  ngOnInit( ): void {
  }

}
