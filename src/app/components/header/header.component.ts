import {Component, HostListener, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {IProduct} from "../../shared/interfaces/product.interface";
import {ICategory} from "../../shared/interfaces/category.interface";
import {AngularFireDatabase} from "@angular/fire/database";
import {CategoriesService} from "../../shared/services/categories.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links: Observable<ICategory[]>;
  currentCategory: ICategory;
  currentScreenWidth:number;
  activeMobieMenu:boolean = false;
  private styleTag: HTMLStyleElement;

  constructor(private categoryService: CategoriesService ,private route: ActivatedRoute) {
    this.styleTag = this.buildStyleElement();
  }
  ngOnInit(): void {
    this.links = this.categoryService.getCategories();
  }
  getLinkHref(linkTranslate :string){
      return ['catalog/',linkTranslate.toString()]
  }
  selectCategory(category:ICategory){
    this.categoryService.changeCategory(category);
  }
  toggleMobileMenu(){
    this.activeMobieMenu = !this.activeMobieMenu;
    this.disable()
  }

  public disable() : void {
    document.body.appendChild( this.styleTag );
  }
  public enable() : void {
    document.body.removeChild( this.styleTag );
  }
  private buildStyleElement() : HTMLStyleElement {
    var style = document.createElement( "style" );
    style.type = "text/css";
    style.textContent = `
			body {
				overflow: hidden !important ;
			}
		`;
    return( style );
  }
  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.currentScreenWidth = event.target.innerWidth;
    }
  @HostListener('window:click', ['$event'])
    onClick(event){
      if(this.activeMobieMenu && !event.target.closest('.mob-menu') &&  !event.target.closest('.menu__btn') ){
        this.toggleMobileMenu();
        this.enable();
      }
    }
}
