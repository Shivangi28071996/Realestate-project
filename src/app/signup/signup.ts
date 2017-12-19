export class Signup{
    id:number;
    fullname:String; 
    email:String;
    password:String;
    phone:number;
    username:String;
    stat:String;
   
    constructor(a:String,b:String,c:String,d:String,e:number,f:String,g?:number){
        this.fullname=a;
        this.email=b;
        this.password=c;
        this.stat=d;
        this.phone=e;
        this.username=f;
       this.id=g;
      

    }

}