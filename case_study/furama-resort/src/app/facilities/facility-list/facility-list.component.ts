import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../../services/facility-service';
import {Router} from '@angular/router';
import {Facility} from '../../models/facility';

declare let createThreeDots: any;

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  p: number = 1;
  idDelete = 0;
  nameDelete = '';
  facilityDelete: Facility;
  facilities: Facility[];

  constructor(private facilityService: FacilityService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllFacility();
    // tslint:disable-next-line:no-unused-expression
    new createThreeDots();
  }

  getAllFacility() {
    this.facilities = this.facilityService.getFacilities();
    console.log(this.facilities);
  }

  sendNameProduct(idValue: number, nameValue: string) {
    this.idDelete = idValue;
    this.nameDelete = nameValue;
  }

  deleteFacility(closeModal: HTMLButtonElement) {
    this.facilityDelete = this.facilityService.findById(this.idDelete);
    this.facilityService.deleteService(this.facilityDelete.serviceId);
    this.router.navigate(['facility-list']);
    this.ngOnInit();
    console.log(this.facilityDelete);
    closeModal.click();
  }
}
