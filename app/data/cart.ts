import { Product } from './product';
export class Cart {
    Id?:number;
    UserId?:number;
    ProductiD?:number;

    constructor(id?:number, userId?:number, productiD?:number){
        this.Id = id;
        this.UserId = userId;
        this.ProductiD  = productiD;
    }
}
