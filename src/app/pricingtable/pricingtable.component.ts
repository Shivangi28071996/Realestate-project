import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.services'
@Component({
  selector: 'app-pricingtable',
  templateUrl: './pricingtable.component.html',
  styleUrls: ['./pricingtable.component.css'],
  providers:[AppService]
})
export class PricingtableComponent implements OnInit {

  constructor(private service:AppService) { }

  ngOnInit() {
    
  }
start(){
  this.service.pricingnavigate();
}
}
