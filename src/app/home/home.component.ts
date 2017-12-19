import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { SubmitDetails } from '../submitproperty/submit';
import {AppService} from '../app.services';
import {Home} from './home';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[AppService]
})

export class HomeComponent implements OnInit {
  property:SubmitDetails[]=[];
  propertydetail:SubmitDetails;
  list:SubmitDetails[]=[];
  allproperty:SubmitDetails[]=[];
  start:number;
  end:number;
activeProperty:SubmitDetails[]=[];
  constructor(private service:AppService,private router:Router) {  }

  ngOnInit() {
    this.service.getdetail1().subscribe(t => {this.allproperty=t;this.latestProperty()});
  }
latestProperty(){
  var j=0;
  var k=0;
  var size=this.allproperty.length;
  for(var i=0;i<size;i++){
    if(this.allproperty[i].propertyStat==="ACTIVE"){
      this.activeProperty[j]=this.allproperty[i];
      j++;
    }
  }
  
  this.end=this.activeProperty.length;
  this.start=this.end-3;
  for(var i=this.start;i<this.end;i++){
    this.property[k]=this.activeProperty[i];
    k++;
  }
}

displayProperty(id){
  localStorage.setItem("propertyId",id);
}

locationList(formValue){
  localStorage.setItem("location",formValue.toUpperCase())
  this.router.navigate(['/propertyList'])
}
}
