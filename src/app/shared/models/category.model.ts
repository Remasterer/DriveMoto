import {ICategory} from "../interfaces/category.interface";

export class Category implements ICategory {
  constructor(public id:number,
              public name:string,
              public image:string,
              public translate:string) {
  }
}
