import { Component, OnInit } from '@angular/core';
import {SubmitDetails} from '../submitproperty/submit'
import {AppService} from '../app.services'
import {Signup} from '../signup/signup'

declare var $: any;

@Component({
  selector: 'app-myproperty',
  templateUrl: './myproperty.component.html',
  styleUrls: ['./myproperty.component.css'],
  providers:[AppService]
})
export class MypropertyComponent implements OnInit {
   iproperty:SubmitDetails[]=[];
   iproperty1:SubmitDetails;
  sign:Signup;
   a:any;
  iproperty2:SubmitDetails[]=[];
  submitted:boolean;
  deleted:boolean;
  id:number=0;
  userId:number;
display:boolean=true;
deactivate:boolean;
displayProperty:boolean;
     constructor(private service:AppService) {
      
      }
  
   ngOnInit():void{

    this.userId=this.service.checkcredentials();

   this.service.getdetail1()
   .subscribe(l1=>{
      this.iproperty=l1;
      this.propertydetail();
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

    displayPropertyDetail(id){
      localStorage.setItem("propertyId",id);
    }

  propertydetail(){
    var j=0;
    for(var i=0;i<this.iproperty.length;i++){
      if(this.iproperty[i].pd.id==this.userId){
        this.iproperty2[j]=this.iproperty[i];
        j++;
      }    
    }
    this.displayProperty=true;
  }
  
  edit1(x:number){
  for(var i=0;i<this.iproperty2.length;i++)
    {
      
      if(this.iproperty2[i].propId==x)
      {    
        this.display=true;
        this.iproperty1=this.iproperty2[i];
        console.log(this.iproperty1);
        if(this.iproperty1.type=="Garage" || this.iproperty1.type=="Agriculture Plot" || this.iproperty1.type=="Commercial Plot"){
          this.display=false;
        }
      }
    }
  this.a=1;
  }
  
  edit(y){
    this.deleted=false;
  
 
  this.service.update1(y,this.iproperty1.propId).subscribe(t => {this.ngOnInit()});
  
  this.submitted=true;
  }

  delete1(id){
    this.id=id;
  }
  
  delete(id){
    this.deactivate=false;
    for(var i=0;i<this.iproperty2.length;i++){
      if(this.iproperty2[i].propId===id){
        if(this.iproperty2[i].propertyStat=="ACTIVE"){
          this.deactivate=true;
       this.service.deletedetail(id).subscribe(t => {this.ngOnInit();});
      }
      else if(this.iproperty2[i].propertyStat=="DEACTIVE"){
        this.deactivate=false;
        this.service.enabledetail(id).subscribe(t => {this.ngOnInit();});
      }
    }
  }
  
}
}
