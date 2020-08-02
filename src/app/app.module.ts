import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { NgxSimpleSliderModule } from 'ngx-simple-slider';
import { ActionComponent } from './components/action/action.component';
import { SearchComponent } from './components/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import { CategoriesComponent } from './components/categories/categories.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { ProductsSliderComponent } from './components/products-slider/products-slider.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsByProductCategoriesPipe } from './shared/pipes/products-by-product-categories.pipe';
import { PropositionComponent } from './components/proposition/proposition.component';
import { FooterComponent } from './components/footer/footer.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FilterComponent } from './components/filter/filter.component';
import { ShopComponent } from './components/shop/shop.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSliderModule} from '@angular/material/slider';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { BreadcumpsComponent } from './components/breadcumps/breadcumps.component';
import { RatingModule } from 'ngx-bootstrap/rating';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import {AngularFireDatabaseModule} from "@angular/fire/database";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BannerComponent,
    ActionComponent,
    SearchComponent,
    CategoriesComponent,
    CategorieComponent,
    ProductsSliderComponent,
    ProductComponent,
    ProductsByProductCategoriesPipe,
    PropositionComponent,
    FooterComponent,
    CatalogComponent,
    FilterComponent,
    ShopComponent,
    ProductPageComponent,
    BreadcumpsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSimpleSliderModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCheckboxModule,
    CarouselModule,
    TabsModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatSliderModule,
    RatingModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
