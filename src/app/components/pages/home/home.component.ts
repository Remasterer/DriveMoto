import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../../shared/services/products.service";
import {IProduct} from "../../../shared/interfaces/product.interface";
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productsCollection = this.db.collection('products').valueChanges();
  popularProducts;
  saledProducts;
  constructor(private productsService:ProductsService,private db: AngularFirestore) { }

  ngOnInit(): void {
    this.getPopularProducts();
    this.getSaledProducts();

  }
  getPopularProducts(){
    this.popularProducts = this.productsService.getPopularProducts();
  }
  getSaledProducts(){
    this.saledProducts = this.productsService.getSaledProducts();

  }

}
