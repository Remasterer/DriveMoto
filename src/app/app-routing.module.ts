import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/pages/home/home.component";
import {CatalogComponent} from "./components/pages/catalog/catalog.component";
import {Product} from "./shared/models/product.model";
import {ProductPageComponent} from "./components/pages/product-page/product-page.component";
import {ProductComponent} from "./components/product/product.component";
import {AdminProductsComponent} from "./components/admin/admin-products/admin-products.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'catalog/:id', component: CatalogComponent},
  {path: 'product/:id',component: ProductPageComponent},
  {path: 'admin',component: AdminProductsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
