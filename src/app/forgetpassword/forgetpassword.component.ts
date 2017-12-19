import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.services';
import {Router} from '@angular/router';
import {Signup} from '../signup/signup'

declare var $:any;
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css'],
  providers:[AppService]
})
export class ForgetpasswordComponent implements OnInit {
l1:Signup[];
data:Signup;
  otpvalue:String;
  otpmsg:boolean;
  signdata:Signup;
  password:boolean;
  a:boolean;
  email:boolean=false;
  username:boolean=false;
  otp:boolean;
  type="password";
  show:boolean;
  type1="password";
  show1:boolean;
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

  sendmail(form){
    this.username=false;
    this.email=false;
    this.otp=false;
    var size=this.l1.length;
    for(var i=0;i<size;i++){
    if(this.l1[i].username==form.username){
      if(this.l1[i].email==form.email){
        this.otp=true;
        this.data=this.l1[i];
        this.service.forgetpassword(this.data).subscribe(t=>{
      this.otpvalue=t.text();setTimeout});
      setTimeout(()=>{    
        this.otp = false;
   },600000);
      }
    else{
      this.email=true;
    }
    }
  else{
    this.username=true;
}
  }
  }
  
  Otpverify(otp){
    this.otpmsg=false;
  if(this.otpvalue==otp){
    this.password=true;
   }
else{
this.otpmsg=true;
}
  }
save(password){
  if(password.np==password.cnp){
    this.a=false;
    var signup=new Signup(this.data.fullname,this.data.email,password.np,this.data.stat,this.data.phone,this.data.username);
    this.service.update(signup,this.data.id).subscribe(t =>{this.ngOnInit();});
    this.router.navigate(['/login']);
  }
  else{
    this.a=true;
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
