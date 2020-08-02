import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../shared/interfaces/product.interface";
import {Product} from "../../shared/models/product.model";
import {Observable} from "rxjs";
import {AngularFireDatabase} from "@angular/fire/database";
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  @Input() cattegoryId;
  products: Observable<IProduct[]>;

  showProduct: IProduct = new Product(1,true,'assets/img/products/presProduct.png', 'Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue\n', 9800,true, 1,3000,[1,2,3,5],3);
  constructor(db: AngularFireDatabase) {
    // @ts-ignore
    this.products = db.list('/product-main').valueChanges();
  }

  ngOnInit( ): void {
  }


}
