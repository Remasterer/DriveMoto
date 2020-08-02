import { Injectable } from '@angular/core';
import {ICategory} from "../interfaces/category.interface";
import {Observable, of} from "rxjs";
import {IProductCategory} from "../interfaces/product-category.interface";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories: ICategory[] ;

  productCategories: IProductCategory[] = [
    {
      hash: 1,
      name: 'запчасти',
    },
    {
      hash: 2,
      name: 'моторы',
    },
    {
      hash: 3,
      name: 'шины ',
    },
    {
      hash: 4,
      name: 'электроника',
    },
    {
      hash: 5,
      name: 'инструменты',
    },
    {
      hash: 6,
      name: 'аксессуары',
    }
  ];
  getCategories(): Observable<ICategory[]>{
    return of(this.categories);
  }
  getProductCategories(): Observable<IProductCategory[]>{
    return of(this.productCategories);
  }
  constructor() { }
}
