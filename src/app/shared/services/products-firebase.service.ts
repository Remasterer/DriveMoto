import { Injectable } from '@angular/core';
import {IProduct} from "../interfaces/product.interface";
import {AngularFireDatabase} from "@angular/fire/database";

@Injectable({
  providedIn: 'root'
})
export class ProductsFirebaseService {
  constructor(private angularFireBase :AngularFireDatabase) { }

}
