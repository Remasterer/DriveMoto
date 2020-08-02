import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../../shared/services/products.service";
import {IProduct} from "../../../shared/interfaces/product.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  popularProducts: IProduct[];
  saledProducts:IProduct[];
  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.getPopularProducts();
    this.getSaledProducts();
    console.log(this.saledProducts)
  }
  getPopularProducts(){
    this.productsService.getPopularProducts()
      .subscribe(product=>this.popularProducts = product);
  }
  getSaledProducts(){
    this.productsService.getSaledProducts()
      .subscribe(product=>this.saledProducts = product);
  }

}
