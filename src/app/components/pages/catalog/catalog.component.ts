import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../../shared/interfaces/product.interface";
import {Product} from "../../../shared/models/product.model";
import { Location } from '@angular/common';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  currentCategoryId:number;
  constructor(private location:Location) { }

  ngOnInit(): void {
    // @ts-ignore
    this.currentCategoryId  =  this.location.getState().categoryId;
    console.log(this.location)
  }

}
