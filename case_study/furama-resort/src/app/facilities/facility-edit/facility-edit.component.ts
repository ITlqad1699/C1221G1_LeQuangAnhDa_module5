import {Component, OnInit} from '@angular/core';
import {Facility} from '../models/facility';
import {RentType} from '../models/rentType';
import {FacilityType} from '../models/facilityType';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {RentTypeService} from '../rent-type.service';
import {FacilityService} from '../facility.service';
import {FacilityTypeService} from '../facility-type.service';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  facility: Facility;
  rentTypes: RentType[] = [];
  id: number;
  facilityTypes: FacilityType[] = [];
  facilityForm: FormGroup;
  check = 0;

  constructor(private router: Router,
              private rentTypeService: RentTypeService,
              private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private fb: FormBuilder,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      console.log(this.id);
      const facility = this.findById(this.id);
      this.facilityForm = this.fb.group({
        serviceCode: [facility.serviceCode, [Validators.required, Validators.pattern('^$|^DV-[\\d]{4}$')]],
        serviceName: [facility.serviceName, Validators.required],
        serviceImage: [facility.serviceImage],
        serviceArea: [facility.serviceArea, [Validators.required]],
        serviceCost: [facility.serviceCost, [Validators.required]],
        serviceMaxPeople: [facility.serviceMaxPeople, [Validators.required]],
        standardRoom: [facility.standardRoom],
        descriptionOtherConvenience: [facility.descriptionOtherConvenience],
        poolArea: [facility.poolArea],
        numberOfFloors: [facility.numberOfFloors],
        freeAttachedService: [facility.freeAttachedService],
        rentType: [facility.rentType, [Validators.required]],
        facilityType: [facility.facilityType, [Validators.required]],
        active: [facility.active],
        id: [facility.id]
      });
    });
    this.rentTypeService.getAllRentTypeAPI().subscribe(rentTypes => {
      this.rentTypes = rentTypes;
    }, error => {
      console.log(error);
    });
    this.facilityTypeService.getAllFacilityTypeAPI().subscribe(facilityTypes => {
      this.facilityTypes = facilityTypes;
    }, error => {
      console.log(error);
    });
  }

  get serviceCode() {
    return this.facilityForm.get('serviceCode');
  }

  get serviceName() {
    return this.facilityForm.get('serviceName');
  }

  get serviceArea() {
    return this.facilityForm.get('serviceArea');
  }

  get serviceCost() {
    return this.facilityForm.get('serviceCost');
  }

  get serviceMaxPeople() {
    return this.facilityForm.get('serviceMaxPeople');
  }

  get standardRoom() {
    return this.facilityForm.get('standardRoom');
  }

  get descriptionOtherConvenience() {
    return this.facilityForm.get('descriptionOtherConvenience');
  }

  get poolArea() {
    return this.facilityForm.get('poolArea');
  }

  get numberOfFloors() {
    return this.facilityForm.get('numberOfFloors');
  }

  get freeAttachedService() {
    return this.facilityForm.get('freeAttachedService');
  }

  get rentType() {
    return this.facilityForm.get('rentType');
  }

  get facilityType() {
    return this.facilityForm.get('facilityType');
  }


  findById(id: number) {
    return this.facilityService.findById(id);
  }

  compareFn(t1, t2): boolean {
    return t1 && t2 ? t1.rentTypeId === t2.rentTypeId : t1 === t2;
  }

  compareFnType(t1, t2): boolean {
    return t1 && t2 ? t1.facilityTypeId === t2.facilityTypeId : t1 === t2;
  }

  onSubmit(id: number) {
    if (this.facilityForm.invalid) {
      this.router.navigateByUrl('facility/facility-edit/' + this.id);
    } else {
      const facility = this.facilityForm.value;
      console.log(facility);
      this.facilityService.updateFacilityAPI(id, facility).subscribe(() => {
        console.log('success');
        this.facilityForm.reset();
        this.router.navigateByUrl('facility/facility-list');
      }, e => {
        console.log(e);
      });
    }
  }
}
