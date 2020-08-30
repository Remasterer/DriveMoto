import { Component, OnInit } from '@angular/core';
import {Product, Shirt} from "../../../shared/models/product.model";
import {ProductsService} from "../../../shared/services/products.service";
import {AngularFirestore} from "@angular/fire/firestore";
import {IProduct} from "../../../shared/interfaces/product.interface";

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})

export class AdminProductsComponent implements OnInit {


id: number;
  inSale:boolean;
  photo: string;
  name: string;
  price: number;
  avaliable: boolean;
  categoryId: number;
  buys: number;
  rates: number;
  relatedProductsIds:string;

  productsLists;
  shirtsLists;
  constructor(private productsService: ProductsService,private db: AngularFirestore) {
  }

  ngOnInit(): void {
    this.productsLists = this.productsService.allProducts;

  }
  addProduct(){
    let newProduct: IProduct = new Product(
      this.id,
      this.inSale,
      this.photo,
      this.name,
      this.price,
      this.avaliable,
      this.categoryId,
      this.buys,
      this.relatedProductsIds.split(',').map(function (x) {
        return parseInt(x, 10);
      }),
      this.rates);
    console.log(newProduct)
      this.productsService.addProduct(newProduct);
  }


}
