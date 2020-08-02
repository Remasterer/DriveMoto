import {Component, OnInit} from '@angular/core';
import {ICategory} from "../../shared/interfaces/category.interface";
import {CategoriesService} from "../../shared/services/categories.service";
import {Observable} from "rxjs";
import {AngularFireDatabase} from "@angular/fire/database";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: Observable<ICategory[]>;
  constructor(private db: AngularFireDatabase) {
    // @ts-ignore
    this.categories = db.list('/categories-main').valueChanges();
    console.log(this.categories)
  }
  ngOnInit(): void {
  }

  getLinkHref(linkTranslate :string){
    return ['catalog',linkTranslate.toString()]
  }
}

