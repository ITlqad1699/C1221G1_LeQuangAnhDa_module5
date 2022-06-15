import {Component, OnInit} from '@angular/core';
import {Facility} from '../models/facility';
import {RentType} from '../models/rentType';
import {FacilityType} from '../models/facilityType';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {RentTypeService} from '../services/rent-type.service';
import {FacilityService} from '../services/facility.service';
import {FacilityTypeService} from '../services/facility-type.service';

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
      console.log(facility);
      this.facilityForm = this.fb.group({
        serviceCode: [facility.serviceCode, [Validators.required, Validators.pattern('^$|^DV-[\\d]{4}$')]],
        serviceName: [facility.serviceName, Validators.required],
        serviceImage: [facility.serviceImage],
        serviceArea: [facility.serviceArea, [Validators.required]],
        serviceCost: [facility.serviceCost, [Validators.required]],
        serviceMaxPeople: [facility.serviceMaxPeople, [Validators.required]],
        standardRoom: [facility.standardRoom, [Validators.required]],
        descriptionOtherConvenience: [facility.descriptionOtherConvenience, [Validators.required]],
        poolArea: [facility.poolArea, [Validators.required]],
        numberOfFloors: [facility.numberOfFloors, [Validators.required]],
        freeAttachedService: [facility.freeAttachedService, [Validators.required]],
        rentType: [facility.rentType, [Validators.required]],
        facilityType: [facility.facilityType, [Validators.required]],
        active: [facility.active],
        serviceId: [facility.serviceId]
      });
    });
    this.rentTypes = this.rentTypeService.getRentTypes();
    this.facilityTypes = this.facilityTypeService.getFacilityType();
  }

  get serviceCode() {
    return this.facilityForm.get('serviceCode');
  }
  get serviceId() {
    return this.facilityForm.get('serviceId');
  }
  get serviceName() {
    return this.facilityForm.get('serviceName');
  }

  get serviceImage() {
    return this.facilityForm.get('serviceImage');
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

  updateFacility(serviceId: number) {
    const facility = this.facilityForm.value;
    console.log(facility);
    this.facilityService.updateFacility(serviceId, facility);
  }

  compareFn(t1, t2): boolean {
    return t1 && t2 ? t1.rentTypeId === t2.rentTypeId : t1 === t2;
  }

  compareFnType(t1, t2): boolean {
    return t1 && t2 ? t1.facilityTypeId === t2.facilityTypeId : t1 === t2;
  }

  onSubmit(serviceId: number) {
    if (this.facilityForm.invalid) {
      if (this.serviceCode.value == '') {
        this.serviceCode.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.serviceName.value == '') {
        this.serviceName.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.serviceArea.value == '') {
        this.serviceArea.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.serviceCost.value == '') {
        this.serviceCost.setErrors({empty: 'Empty! Please input!'});
      }

      if (this.serviceMaxPeople.value == '') {
        this.serviceMaxPeople.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.poolArea.value == null) {
        this.poolArea.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.numberOfFloors.value == null) {
        this.numberOfFloors.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.freeAttachedService.value == null) {
        this.numberOfFloors.setErrors({empty: 'Empty! Please input!'});
      }
      this.router.navigateByUrl('facility/facility-edit/' + this.serviceId.value);
    } else {
      const facility = this.facilityForm.value;
      console.log(facility);
      this.facilityService.updateFacility(serviceId,facility);
      this.router.navigateByUrl('facility/facility-list');
    }
  }
}
