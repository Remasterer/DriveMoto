import {IProduct} from "../interfaces/product.interface";

export class Product implements  IProduct{
  constructor(public id: number,
              public inSale:boolean,
              public photo: string,
              public name: string,
              public price: number,//y
              public avaliable: boolean, //y
              public categoryId: number, //y
              public buys: number,//y
              public relatedProductsIds:number[],//y
              public rates:number) {//y
  }
}
interface IShirt {
  name: string,
  price: number,
}
export class Shirt implements  IShirt{
  constructor( public name:string ,public price:number,) {
  }
}
