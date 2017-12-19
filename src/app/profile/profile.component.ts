import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.services';
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute,ParamMap} from '@angular/router';
import {Signup} from '../signup/signup';
import {Router} from '@angular/router'

declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[AppService]
})
export class ProfileComponent implements OnInit {
display:boolean
sign:Signup
fullDetail:Signup[];
id:number;
  constructor(private service:AppService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.id=this.service.checkcredentials();

    this.service.getdetail().subscribe(t => {
      this.fullDetail=t;
      this.displayUser();
    });

  
    
  }

  displayUser(){
    for(var i=0;i<this.fullDetail.length;i++)
    if(this.fullDetail[i].id==this.id){
        this.sign=this.fullDetail[i];
        this.display=true;
    }
  }

  ngAfterViewChecked() {

    $('.alpha_bet').keypress(function(key) {
        if((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode!=32) && (key.charCode!=45) ) return false;
    });

    $('.mobileNo').keypress(function(key) {
        if(key.charCode < 48 || key.charCode > 57) return false;
    });

  }

  change(s:Signup){
    var s1= new Signup(s.fullname,s.email,this.sign.password,this.sign.stat,s.phone,this.sign.username)
    this.service.update(s1,this.sign.id).subscribe(t => {this.ngOnInit();});
    if(this.sign.stat=="seller"){
      this.router.navigate(['/seller'])
  }
  else{
     this.router.navigate(['/buyer']); 
  }
    
  }

}
