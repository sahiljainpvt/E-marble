export class Product {
    Id?:number ;
    Name?:string;
    Shortdescription?:string;
    Price?:number;
    Image?:string;
    CategoryId?:number;
    ApplicationId?:number;
    Description?:string;

    constructor(Id:number|undefined,Name:string|undefined,Shortdescription:string|undefined,Price:number|undefined,Image:string|undefined,CategoryId:number|undefined,ApplicationId:number|undefined,Description:string|undefined){
    this.Id=Id;
    this.Name=Name;
    this.Shortdescription=Shortdescription;
    this.Price=Price;
    this.Image = Image;
    this.CategoryId=CategoryId;
    this.ApplicationId=ApplicationId;
    this.Description=Description;
    


    }
}
