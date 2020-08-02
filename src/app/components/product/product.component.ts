import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../shared/interfaces/product.interface";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() productInfo: IProduct;
  constructor() { }
  ngOnInit(): void {
  }
  toggleFavorite($event){
    if($event.target.classList.contains('active')){
      $event.target.classList.remove('active');
    }
    else{
      $event.target.classList.add('active')
    }
  }
}
