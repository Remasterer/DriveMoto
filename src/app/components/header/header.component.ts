import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {IProduct} from "../../shared/interfaces/product.interface";
import {ICategory} from "../../shared/interfaces/category.interface";
import {AngularFireDatabase} from "@angular/fire/database";
import {CategoriesService} from "../../shared/services/categories.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links: Observable<ICategory[]>;
  currentCategory: ICategory;

  constructor(private categoryService: CategoriesService ) {
    this.links = categoryService.getCategories();
  }
  ngOnInit(): void {
  }
  getLinkHref(linkTranslate :string){
      return ['catalog/',linkTranslate.toString()]
  }
  selectCategory(category:ICategory){
    this.categoryService.changeCategory(category);
  }

}
