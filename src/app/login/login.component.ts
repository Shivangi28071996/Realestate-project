import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.services'
import {Signup} from '../signup/signup'
import {Login} from './login'
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AppService]
})
export class LoginComponent implements OnInit {
// l1:Signup[]=[];
a:boolean;
b:boolean;
// reg1:any={};
// reg2:any={};
  constructor(private service:AppService,private router:Router) { }
message:String;
  ngOnInit() {
     
  }
  login(l){

    this.service.loggedin(l).subscribe(message =>{ this.message=message.text() });
    if(this.message=="user not found"){
      this.a=true;
    }
    else if(this.message=="password not matched"){
      this.b=true;
    }
    else if(this.message=="seller"){
      localStorage.setItem("user",l.username);
      this.router.navigate(['/seller']);
      }
    else if(this.message=="buyer"){
      localStorage.setItem("user",l.username);
      this.router.navigate(['/buyer']); 
      }
    }
  }

