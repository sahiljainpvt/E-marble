export class Category {
    Id:number|undefined;
    CategoryName:string|undefined;

    constructor(Id:number|undefined, categoryName:string|undefined){
        this.Id = Id;
        this.CategoryName=categoryName;
    }
}
