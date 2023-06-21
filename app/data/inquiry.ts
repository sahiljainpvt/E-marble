import { __makeTemplateObject } from "tslib";

export class Inquiry {
    Id?:number;
    Name?:string;
    Phone?:string;
    Email?:string;
    ProductId?:number;  
    Price?:number;
    UserId?:number;
    Status?:string;

    constructor(id?:number, name?:string, phone?:string, email?:string, productId?:number, price?:number,userid?:number, status?:string){
        this.Id=id;
        this.Name=name;
        this.Phone=phone;
        this.Email=email;
        this.ProductId=productId;
        this.Price=price;
        this.UserId=userid;
        this.Status=status;


    }
}
