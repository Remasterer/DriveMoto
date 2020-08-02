export interface IProduct {
  id: number,
  inSale:boolean,
  photo: string,
  name: string,
  price: number,
  avaliable: boolean,
  categoryId: number,
  buys: number,
  rates: number,
  relatedProductsIds:number[],
}
