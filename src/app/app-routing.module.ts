import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/pages/home/home.component";
import {CatalogComponent} from "./components/pages/catalog/catalog.component";
import {Product} from "./shared/models/product.model";
import {ProductPageComponent} from "./components/pages/product-page/product-page.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent , children: [
      { path: 'kvadrotsikly', component: CatalogComponent },
      { path: 'katera', component: CatalogComponent },
      { path: 'gidrotsikly', component: CatalogComponent },
      { path: 'lodki', component: CatalogComponent },
      { path: 'vezdekhody', component: CatalogComponent },
      { path: 'snegokhody', component: CatalogComponent },
      { path: 'dvigateli', component: CatalogComponent },
    ]
  },
  {path: 'product',component: ProductPageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
