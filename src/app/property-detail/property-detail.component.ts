import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute,ParamMap} from '@angular/router';
import {AppService} from '../app.services';
import { SubmitDetails } from '../submitproperty/submit';
@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css'],
  providers:[AppService]
})
export class PropertyDetailComponent implements OnInit {
property:SubmitDetails;
propertyDetails:SubmitDetails[]=[];
balcony:boolean;
pooja:boolean;
parking:boolean;
ac:boolean;
pool:boolean;
storage:boolean;
gaspipe:boolean;
alarm:boolean;
laundry:boolean;
display:boolean=true;
propertyId:any;
displayPropDetail:boolean;
  constructor(private service:AppService,private route: ActivatedRoute) { }

  ngOnInit() {

    this.propertyId=localStorage.getItem("propertyId");

    this.service.getdetail1().subscribe(data =>{
      this.propertyDetails=data;
      this.displayProperty();
      this.checkFeatures();
    });

  }

  ngOnDestroy(){
    localStorage.removeItem("propertyId");
  }

  displayProperty(){
    for(var i=0;i<this.propertyDetails.length;i++){
      if(this.propertyDetails[i].propId==this.propertyId){
        this.property=this.propertyDetails[i];
      }
    }
  }

  checkFeatures(){

    if(this.property.type=="Garage" || this.property.type=="Commercial Plot" || this.property.type=="Agricultural Plot"){
      this.display=false;
    }
    else{
    if(this.property.balcony==true){
      this.balcony=true;
    }
    if(this.property.parking==true){
      this.parking=true;
    }
    if(this.property.ac==true){
      this.ac=true;
    }
    if(this.property.pool==true){
      this.pool=true;
    }
    if(this.property.storage==true){
      this.storage=true;
    }
    if(this.property.gaspipe==true){
      this.gaspipe=true;
    }
    if(this.property.alarm==true){
      this.alarm=true;
    }
    if(this.property.laundry==true){
      this.laundry=true;
    }
    if(this.property.pooja==true){
      this.pooja=true;
    }
   
  }
this.displayPropDetail=true;
}
}
