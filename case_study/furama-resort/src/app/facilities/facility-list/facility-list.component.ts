import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../facility.service';
import {Router} from '@angular/router';
import {Facility} from '../models/facility';

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
    this.facilityService.getAllFacilityAPI().subscribe(facilities => {
        this.facilities = facilities;
        console.log(this.facilities);
      },
      error => {
        console.log(error);
      });
    console.log(this.facilities);
  }

  sendNameProduct(idValue: number, nameValue: string) {
    this.idDelete = idValue;
    this.nameDelete = nameValue;
  }

  deleteFacility(closeModal: HTMLButtonElement) {
    this.facilityService.fingByIdAPI(this.idDelete).subscribe(res => {
      this.facilityDelete = res;
      console.log(this.facilityDelete);
      this.facilityService.deleteFacilityAPI(this.facilityDelete.id).subscribe(() => {
        this.ngOnInit();
        console.log(this.facilityDelete);
        this.router.navigateByUrl('/facility/facility-list');
        closeModal.click()
      });
    });
  }
}
