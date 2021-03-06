import { Injectable } from '@angular/core';
import {IProduct} from "../interfaces/product.interface";
import {Product} from "../models/product.model";


import { Observable, of } from 'rxjs';


import {AngularFireDatabase} from "@angular/fire/database";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private dbPath: string = '/product-main';

  productsCollection:AngularFirestoreCollection<IProduct>;
  allProducts: Observable<any[]>;
  popularProducts: Observable<any[]>;
  productsInSale: Observable<any[]>;

  comparePopularity(a:IProduct,b:IProduct){
    return a.buys - b.buys;
  }
  getProductsByCategoryId(categoryId:number):Observable<any>{
    if(this.db.collection('products')){
      return this.db.collection('products',ref => ref.where('categoryId', '==', categoryId)).valueChanges();
    }
  }
  getPopularProducts():Observable<IProduct[]>{
    return this.popularProducts;
  }
  getRelatedProducts(currentProduct:IProduct):Observable<IProduct[]>{
    return this.allProducts;
  }
  getCurrentProduct(index:number){
    return  this.db.collection('products',ref => ref.where('id', '==', index)).valueChanges();
  }
  getSaledProducts():Observable<any[]> {
    this.productsInSale = this.db.collection('products', ref => ref.where('inSale','==', true )).valueChanges()
    return this.productsInSale;
  }

  constructor(private db: AngularFirestore) {
    this.productsCollection = this.db.collection('products');
    this.allProducts = this.productsCollection.valueChanges()
  }


  addProduct(newProduct:IProduct){
     this.db.collection<IProduct>('products').add(JSON.parse(JSON.stringify(newProduct)));
  }

}
