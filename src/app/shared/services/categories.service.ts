import { Injectable } from '@angular/core';
import {ICategory} from "../interfaces/category.interface";
import {Observable, of} from "rxjs";
import {IProductCategory} from "../interfaces/product-category.interface";
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories: ICategory[] ;

  productCategories: Observable<any[]>;

  getCategories(): Observable<ICategory[]>{
    return of(this.categories);
  }
  getProductCategories(): Observable<any[]>{
    return this.productCategories;
  }
  constructor(db: AngularFireDatabase) {
    this.productCategories = db.list('categories-main').valueChanges();
  }
}
