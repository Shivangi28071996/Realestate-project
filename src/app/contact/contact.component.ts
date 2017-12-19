import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import {AppService} from '../app.services'
import {Router} from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers:[AppService]
})
export class ContactComponent implements OnInit {
contactDetail:Contact
  constructor(private service:AppService,private router:Router) { }

  ngOnInit() {
  }
  
  ngAfterViewChecked() {
    
        $('.alpha_bet').keypress(function(key) {
            if((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode!=32) && (key.charCode!=45) ) return false;
        });
    
        $('.mobileNo').keypress(function(key) {
            if(key.charCode < 48 || key.charCode > 57) return false;
        });
    
      }

  send(contactForm:Contact){
    this.contactDetail=new Contact(contactForm.fullname,contactForm.email,contactForm.subject,contactForm.phone,contactForm.message);
    this.service.postContactForm(this.contactDetail).subscribe(t => {console.log(t)});
        this.router.navigate(['/Home']);
  }
}
