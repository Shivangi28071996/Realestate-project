import {Injectable} from '@angular/core';
import { Http , Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';//for mapping
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Router} from '@angular/router';
import {Signup} from './signup/signup';
import {Login} from './login/login'
import{SubmitDetails} from './submitproperty/submit';
import {Home} from './home/home';
import {Contact} from './contact/contact';

@Injectable()
export class AppService{
    data:any;
// private url="https://peaceful-fjord-86289.herokuapp.com/addpersonaldetail";
// //private url1="https://peaceful-fjord-86289.herokuapp.com/addpropertydetail";
// private retrieveurl="https://peaceful-fjord-86289.herokuapp.com/getpersonaldetail";
// private retrieveurl1="https://peaceful-fjord-86289.herokuapp.com/getpropertydetail";
// private otpurl="https://peaceful-fjord-86289.herokuapp.com/otp";
// private forgetpasswordurl="https://peaceful-fjord-86289.herokuapp.com/Forgetpassword";
private url="http://localhost:8080/addpersonaldetail";
private retrieveurl="http://localhost:8080/getpersonaldetail";
private retrieveurl1="http://localhost:8080/getpropertydetail";
private otpurl="http://localhost:8080/otp";
private forgetpasswordurl="http://localhost:8080/Forgetpassword";
private contactUrl="http://localhost:8080/contactForm"


constructor(private http:Http,private router:Router){}

getdetail():Observable<Signup[]>{
    return this.http.get(this.retrieveurl)
      .map((response:Response) => <Response> response.json())
      .catch(this.handleError);
}

getdetail1():Observable<SubmitDetails[]>{
    return this.http.get(this.retrieveurl1)
      .map((response:Response) => <SubmitDetails[]> response.json())
      .catch(this.handleError);
}

get(id:number):Observable<Signup>{
    return this.getdetail().map(user=>user.find(u=>u.id===id))
}
getLocation(location:String):Observable<SubmitDetails>{
    return this.getdetail1().map(user=>user.find(u=>u.location===location))
}

getproperty(id:number):Observable<SubmitDetails>{
    return this.getdetail1().map(user=>user.find(u=>u.propId===id))
}

post(sign:Signup):Observable<Response>{
    let headers=new Headers({'Content-Type':'application/json'});
    let opts=new RequestOptions({headers:headers});
    return this.http.post(this.url,JSON.stringify(sign),opts)
    .map(() => null)
    .catch(this.handleError);
}

post1(sign:SubmitDetails,id:number):Observable<Response>{
    let headers=new Headers({'Content-Type':'application/json'});
    let opts=new RequestOptions({headers:headers});
    return this.http.post("http://localhost:8080/addpropertydetail/"+id,JSON.stringify(sign),opts);

}

postContactForm(contactForm:Contact):Observable<Response>{
    let headers=new Headers({'Content-Type':'application/json'});
    let opts=new RequestOptions({headers:headers});
    return this.http.post(this.contactUrl,JSON.stringify(contactForm),opts)
    .map(() => null)
    .catch(this.handleError);
}

loggedin(l):Observable<Response>{
    let headers=new Headers({'Content-Type':'application/json'});
    let opts=new RequestOptions({headers:headers});
    return this.http.post("http://localhost:8080/logindata",JSON.stringify(l),opts)
            .map( (res:Response) => res)
            .catch(this.handleError);
}
callotp(signdata:Signup):Observable<Response>{
    let headers=new Headers({'Content-Type':'application/json'});
    let opts=new RequestOptions({headers:headers});
    return this.http.post(this.otpurl,JSON.stringify(signdata),opts);

}
forgetpassword(data:Signup):Observable<Response>{
    let headers=new Headers({'Content-Type':'application/json'});
    let opts=new RequestOptions({headers:headers});
    return this.http.post(this.forgetpasswordurl,JSON.stringify(data),opts);

}
logout(){
    localStorage.removeItem("user");
    this.router.navigate(['/Login']);
}

checkcredentials(){
   

    if(localStorage.getItem("user")==null){
        this.router.navigate(['/Login']);
    }
    else{
        this.data=localStorage.getItem("user");
        return this.data;
    }
    
}

pricingnavigate(){
    if(localStorage.getItem("user")==null){
        this.router.navigate(['/Login']);
    }
    else{
        this.router.navigate(['/payment'])
    }
}

update(password:Signup,id:number):Observable<Signup>{
    let headers=new Headers({'Content-Type':'application/json'});
    let opts=new RequestOptions({headers:headers});
    return this.http.put("http://localhost:8080/updatepassword/"+id.toString(),JSON.stringify(password),opts)
    //.map(this.extractData)
    .catch(this.handleError);
   }
   update1(property:SubmitDetails,id):Observable<SubmitDetails>{
    let headers=new Headers({'Content-Type':'application/json'});
    let opts=new RequestOptions({headers:headers});
    return this.http.put("http://localhost:8080/updatepropertydetail/"+id.toString(),JSON.stringify(property),opts)
    //.map(this.extractData)
    .catch(this.handleError);
   }

   deletedetail(prop:number){
       return this.http.delete("http://localhost:8080/deletepropertydetail/"+prop)
            .map(() => null)
            .catch(this.handleError);
   }
   enabledetail(prop:number){
    return this.http.delete("http://localhost:8080/enablepropertydetail/"+prop.toString())
         .map(() => null)
         .catch(this.handleError);
}

private handleError(error:Response){
      console.error(error);
      return Observable.throw(error.json().error());
      
   }
}