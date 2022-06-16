import {Component, OnInit} from '@angular/core';
import {Facility} from '../models/facility';
import {FacilityType} from '../models/facilityType';
import {RentType} from '../models/rentType';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {RentTypeService} from '../rent-type.service';
import {FacilityService} from '../facility.service';
import {FacilityTypeService} from '../facility-type.service';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  checking = 0;
  facility: Facility;
  rentTypes: RentType[] = [];
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
    this.facilityForm = this.fb.group({
      id: [''],
      serviceCode: ['', [Validators.required, Validators.pattern('^$|^DV-[\\d]{4}$')]],
      serviceName: ['', Validators.required],
      serviceImage: ['../../assets/img/home/explore6.png'],
      serviceArea: ['', [Validators.required]],
      serviceCost: ['', [Validators.required]],
      serviceMaxPeople: ['', [Validators.required]],
      standardRoom: ['', [Validators.required]],
      descriptionOtherConvenience: ['', [Validators.required]],
      poolArea: ['', [Validators.required]],
      numberOfFloors: ['', [Validators.required]],
      freeAttachedService: ['', [Validators.required]],
      rentType: ['', [Validators.required]],
      facilityType: ['', [Validators.required]],
      active: [1]
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

  showCreateForm(event) {
    // console.log(event);
    this.checking = event.target.value;
    // console.log(this.checking);
    if (event.target.value == 0) {
      this.facilityForm.clearValidators();
      this.checking = 0;
    }
    if (event.target.value == 1) {
      this.facilityForm.clearValidators();
      this.checking = 1;
      this.facilityForm.controls['facilityType'].setValue(1);
      this.facilityForm.controls['numberOfFloors'].setValue('');
      this.facilityForm.controls['poolArea'].setValue('');
      this.facilityForm.controls['rentType'].setValue(4);
      this.facilityForm.controls['freeAttachedService'].setValue('none');
    }
    if (event.target.value == 2) {
      this.facilityForm.clearValidators();
      this.checking = 2;
      this.facilityForm.controls['facilityType'].setValue(2);
      this.facilityForm.controls['numberOfFloors'].setValue('');
      this.facilityForm.controls['rentType'].setValue(4);
      this.facilityForm.controls['poolArea'].setValue(0);
      this.facilityForm.controls['freeAttachedService'].setValue('none');
    }
    if (event.target.value == 3) {
      this.facilityForm.clearValidators();
      this.checking = 3;
      this.facilityForm.controls['facilityType'].setValue(3);
      this.facilityForm.controls['rentType'].setValue(4);
      this.facilityForm.controls['numberOfFloors'].setValue(0);
      this.facilityForm.controls['poolArea'].setValue(0);
      this.facilityForm.controls['freeAttachedService'].setValue('');
      this.facilityForm.controls['standardRoom'].setValue('none');
      this.facilityForm.controls['descriptionOtherConvenience'].setValue('none');
    }
  }

  onSubmit() {
    if (this.facilityForm.invalid) {
      console.log(this.facilityForm.value);
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
      if (this.poolArea.value == '') {
        this.poolArea.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.numberOfFloors.value == '') {
        this.numberOfFloors.setErrors({empty: 'Empty! Please input!'});
      }
      this.router.navigateByUrl('/facility/facility-create');
    } else {
      const facility = this.facilityForm.value;
      console.log(facility);
      this.facilityService.createFacilityAPI(facility).subscribe(() => {
        this.facilityForm.reset();
        this.router.navigateByUrl('/facility/facility-list');
        console.log('Add success!');
      }, (error) => {
        console.log(error);
      });
    }
  }
}
