import { Injectable } from '@angular/core';
import { User } from '../data/user';
import { Cart } from '../data/cart';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private users: User[] = [];
  private cart: Cart[]=[];
  public show: boolean = true;
  public userlogin: boolean = false;
  public isadmin: boolean = false;
  public loginuserID:number=0;

  constructor() { 
    this.users = [
      new User(1,'sahil Jain', 'sahil@gmail.com', '1234567898', 'sahil',false),
      new User(2,'Rutvik Chavda', 'rutvik@gmail.com','123456789', 'rutvik',false),
      new User(3,'Ayush Modi', 'ayush@gmail.com', '123456789', 'ayush',false),
      new User(4,'Admin', 'admin@gmail.com', '123456789', 'admin',true)
    ];
    this.cart=[
      new Cart(1,1,1),
      new Cart(2,2,2),
      new Cart(3,3,3),
      new Cart(4,1,3)
    ]
    
  }

  getUData(): User[] {
    return this.users;
  }
  removecart(uid:number):void{
    this.cart=this.cart.filter(c => c.UserId!=uid)
    console.log(this.cart,"from cart");
  }

  removecarts(uid:number,proid:number){
    console.log(uid,proid);

    const num=this.cart.findIndex(c =>  (c.ProductiD!==proid && c.UserId!==uid) );
    console.log(num);
    this.cart.splice(num-1,1);
    console.log(this.cart);
  }
  getcartnumber(): string {
      const number = this.cart.filter(c => c.UserId === this.loginuserID);
   
      return "("+number.length+")";
      
  }
  getcart(): Cart[] {
    return this.cart;
  }
  addcart(cart:Cart): boolean {
    cart.Id=this.cart.length;
    this.cart.push(cart);
    console.log(this.cart);
    return true
  }
  addUser(newuser: User): boolean {
    if (newuser != undefined) {
      this.users.push(newuser);
      return true;
    }
    return false;
  }

  getUser(): User | undefined {
    let usr = this.users.find(each => each.Id ==this.loginuserID);
    return usr;
  }

  getshowstatus(): boolean {
    return this.show;
  }

  updateshowstatus(value: boolean) {
    this.show = value;
  }

  updatelofingstatus(value: boolean,id:number,isadmin:boolean): boolean {
    this.userlogin = value;
    this.loginuserID=id;
    if(isadmin!==undefined)
    this.isadmin = isadmin;
  
    return this.userlogin;
  }

  getuserloginstatus(): boolean {
    return this.userlogin;
  }
  getstausofisadmin():boolean {
    return this.isadmin;
  }
  getuserloginid(): number {
    return this.loginuserID;
  }
}
