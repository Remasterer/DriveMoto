import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../../shared/services/products.service";
import {IProduct} from "../../../shared/interfaces/product.interface";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  constructor(private productsService: ProductsService) { }
  allProducts;
  currentProduct: IProduct;
  productId:number = 2;
  relactedProducts:IProduct[];

  ngOnInit(): void {
    this.getCurrentProduct();
    this.getRelatedProducts();
  }
  getRelatedProducts(){
    this.productsService.getRelatedProducts(this.currentProduct)
      .subscribe(products=>this.relactedProducts = products);
  }
  getCurrentProduct(){
     return this.productsService.getCurrentProduct(this.productId);
  }
  max: number = 5;
  rate: number = 2;

}