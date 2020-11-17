import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from "../../../shared/services/products.service";
import {IProduct} from "../../../shared/interfaces/product.interface";
import {CategoriesService} from "../../../shared/services/categories.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {IBreadcumb} from "../../../shared/interfaces/breadcumbs.interface";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  constructor(private categoryService: CategoriesService,private productsService: ProductsService,
  private route: ActivatedRoute,private location: Location) { }
  currentProduct;
  currentCategory;
  max = 5;
  breadcumpsLinks:IBreadcumb[];
  ngOnInit(): void {

    this.getCurrentProduct();

  }
  getCurrentProduct(){
    this.route.params.forEach((params) => {
      let id = +params['id'];
      this.currentProduct = this.productsService.getCurrentProduct(id).subscribe(
        response => {
          this.currentProduct = response[0];
          this.currentCategory = this.categoryService.getCategoryById(this.currentProduct.categoryId).subscribe(
            respons=>{
              this.currentCategory = respons[0]
              this.breadcumpsLinks = [];
              this.breadcumpsLinks.push({linkHref: 'catalog/'+this.currentCategory.translate, linkName: this.currentCategory.name})
              this.breadcumpsLinks.push({linkHref: 'product/'+this.currentProduct.id, linkName: this.currentProduct.name})
            }
          )
        }
      );
    });
  }

}
