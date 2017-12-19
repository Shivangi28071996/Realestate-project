import { Component } from '@angular/core';
import {AppService} from './app.services';
import {Signup} from './signup/signup';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppService]
})
export class AppComponent {
  title = 'app';
navbarChange:boolean;
id:any;
userDetail:Signup[]=[];
constructor(private service:AppService,private router:Router){}

  ngOnInit(){



}

 
}


