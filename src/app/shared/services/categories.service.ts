import { Injectable } from '@angular/core';
import {ICategory} from "../interfaces/category.interface";
import {BehaviorSubject, Observable, of} from "rxjs";
import {IProductCategory} from "../interfaces/product-category.interface";
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories: ICategory[] ;
  productCategories: Observable<any[]>;

  private categorySourse;
  currentCategory;

  getCategories(): Observable<ICategory[]>{
    return this.productCategories;
  }
  getProductCategories(): Observable<any[]>{
    return this.productCategories;
  }
  getCategoryByName(categoryName:string){
    return this.db.list('categories-main',ref => ref.orderByChild('translate').equalTo(categoryName).limitToFirst(1)).valueChanges();
  }
  getCategoryById(categoryId:number){
    return this.db.list('categories-main',ref => ref.orderByChild('id').equalTo(categoryId).limitToFirst(1)).valueChanges();
  }
  constructor(private db: AngularFireDatabase) {
    this.productCategories = db.list('categories-main').valueChanges();
    this.categorySourse = new BehaviorSubject<ICategory>(this.productCategories[0])
    this.currentCategory = this.categorySourse.asObservable();

  }
  changeCategory(category:ICategory){
    this.categorySourse.next(category);

  }


}
