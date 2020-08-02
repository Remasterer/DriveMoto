import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from "../interfaces/product.interface";
import {ProductCategory} from "../models/product-category.model";

@Pipe({
  name: 'productsByProductCategories'
})
export class ProductsByProductCategoriesPipe implements PipeTransform {

  transform(products: IProduct[],category: ProductCategory, ...args: unknown[]): IProduct[]{
    return products.filter(product=>product.categoryId==category.hash);
  }

}
