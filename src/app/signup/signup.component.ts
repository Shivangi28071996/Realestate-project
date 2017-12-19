import { Component, OnInit } from '@angular/core';
import {Signup} from './signup';
import {AppService} from '../app.services'
import {Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[AppService]
})
export class SignupComponent implements OnInit {
  flag:boolean=false;
  signdata:Signup;
  message:string;
  i:number;
  valid:boolean;
  l1:Signup[]=[];
  a:boolean;
  b:boolean;
  otpvalue:String;
  otpmsg:boolean;
submit:boolean;
type="password";
show:boolean;
type1="password";
show1:boolean;
otp:boolean;

constructor(private service:AppService,private router:Router) { }

  ngOnInit() {
    this.service.getdetail()
    .subscribe(l1=>{
      this.l1=l1
    });
  }

  ngAfterViewChecked() {

    $('.alpha_bet').keypress(function(key) {
        if((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode!=32) && (key.charCode!=45) ) return false;
    });

    $('.mobileNo').keypress(function(key) {
        if(key.charCode < 48 || key.charCode > 57) return false;
    });

  }

  signup(f:Signup, y:String,z:String){
    if(f.password===z){
      this.a=false;
      this.b=false;
      this.submit=this.checkPassword(f.password,z);
      this.signdata= new Signup(f.fullname.toUpperCase(),f.email,f.password,y,f.phone,f.username);
      if(this.submit==true){
      this.service.callotp(this.signdata).subscribe(t=>{
      this.otpvalue=t.text();setTimeout});
      setTimeout(()=>{    
        this.otp = false;
   },600000);
      }
    }
   else{
     this.a=true;
   }
  }

  checkPassword(password,confirmPassword){
      if(password!=confirmPassword){
        this.a=true;
        return false;
      }
      else{
        this.a=false;
        return true;
      }

  }
checkUsername(a){
  this.b=false;
  for(var i=0;i<this.l1.length;i++){
    if(this.l1[i].username==a){
      this.b=true;
    }    
  }
}
Otpverify(otp){
  if(this.otpvalue==otp){
      this.service.post(this.signdata).subscribe(t =>{this.ngOnInit();});
      this.router.navigate(['/Login']);
  }
else{
 this.otpmsg=true;
}

   }

   toggleShow()
   {
       this.show = !this.show;
       if (this.show){
           this.type = "text";
       }
       else {
           this.type = "password";
       }
   }

   toggleShow1()
   {
       this.show1 = !this.show1;
       if (this.show1){
           this.type1 = "text";
       }
       else {
           this.type1 = "password";
       }
   }

}

