export class User {
    Id?:number;
    username?: string;
   name?: string;
    email?: string;
    mobile?:string;
    password?:string;
    Isadmin?:boolean;
    

constructor(id:number,name:string,email:string,mobile:string,password:string,isadmin:boolean) {
this.Id = id;
this.username=email;
this.name = name;
this.email = email; 
this.mobile=mobile;
this.password=password;
this.Isadmin = isadmin;



}
}
