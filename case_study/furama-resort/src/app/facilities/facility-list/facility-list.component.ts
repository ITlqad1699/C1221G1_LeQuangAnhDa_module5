import { Component, OnInit } from '@angular/core';
import {FacilityService} from '../../services/facilityService';
import {Router} from '@angular/router';
import {Facility} from '../../models/facility';
// declare let createThreeDots: any;
// declare let deleteCustomer: any;
@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  p: number = 1;
  facilities: Facility[];
  constructor(private facilityService: FacilityService, private router: Router) { }

  ngOnInit(): void {
    this.getAllFacility()
    // // tslint:disable-next-line:no-unused-expression
    // new createThreeDots();
    // // tslint:disable-next-line:no-unused-expression
    // new deleteCustomer();
  }

  getAllFacility(){
    this.facilities =  this.facilityService.getFacilities();
    console.log(this.facilities)
  }
}
