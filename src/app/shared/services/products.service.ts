import { Injectable } from '@angular/core';
import {IProduct} from "../interfaces/product.interface";
import {Product} from "../models/product.model";

//rxJS
import { Observable, of } from 'rxjs';
import {AngularFireDatabase} from "@angular/fire/database";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  allProducts: IProduct[] = [
    new Product(1,true,'assets/img/products/prodyct-1.png', 'Водонепроницаемы Рюкзак', 9800,true, 1,3000,[1,2,3,5],4),
    new Product(1,true,'assets/img/products/product-2.png', 'Спасательный жилет BRP Men Airflow PFD', 6900,true, 1,3200,[1,2,3,5],3),
    new Product(1,true,'assets/img/products/product-3.png', 'BRP Audio-Premium System', 68800,true, 1,10,[1,2,3,5],1),
    new Product(2,true,'assets/img/products/product-4.png', 'Спасательное снаряжение', 1200,false, 1,200,[1,2,3,5],3),
    new Product(3,true,'assets/img/products/product-4.png', 'Спасательное снаряжение', 1200,false, 1,200,[1,2,3,5],3),
    new Product(4,true,'assets/img/products/product-4.png', 'Спасательное снаряжение', 1200,false, 1,200,[1,2,3,5],5),
  ];
  constructor(private angularFireDatabase: AngularFireDatabase) {
  }
  comparePopularity(a:IProduct,b:IProduct){
    return a.buys - b.buys;
  }
  getPopularProducts():Observable<IProduct[]>{
    return of(this.allProducts.filter( product=>product.buys > 100 ).sort((a,b)=>this.comparePopularity(a,b)));
  }
  getRelatedProducts(currentProduct:IProduct):Observable<IProduct[]>{
    return of(this.allProducts.filter(product=>currentProduct.relatedProductsIds.includes(product.id)));
  }
  getCurrentProduct(index:number):Observable<IProduct>{
    return of(this.allProducts.find(product=>product.id==index))
  }
  getSaledProducts():Observable<IProduct[]>{
    return of(this.allProducts.filter(product=>product.inSale));
  }

}
