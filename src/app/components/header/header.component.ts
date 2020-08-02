import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {IProduct} from "../../shared/interfaces/product.interface";
import {ICategory} from "../../shared/interfaces/category.interface";
import {AngularFireDatabase} from "@angular/fire/database";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links: Observable<ICategory[]>;
  constructor(private db: AngularFireDatabase) {
    // @ts-ignore
    this.links = db.list('/categories-main').valueChanges();
  }
  ngOnInit(): void {
  }
  getLinkHref(linkTranslate :string){
      return ['catalog/',linkTranslate.toString()]
  }

}
