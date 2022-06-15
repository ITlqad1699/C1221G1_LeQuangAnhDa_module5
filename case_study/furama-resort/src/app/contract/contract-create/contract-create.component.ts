import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Customer} from 'src/app/customer/models/customer';
import {Facility} from 'src/app/facilities/models/facility';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from 'src/app/customer/customer.service';
import {FacilityService} from 'src/app/facilities/services/facility.service';
import {ContractService} from 'src/app/contract/service/contract.service';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  customers: Customer[] = [];
  facilities: Facility[] = [];
  contractForm: FormGroup = new FormGroup({
    contractStartDate: new FormControl('', [Validators.required]),
    contractEndDate: new FormControl('', [Validators.required]),
    contractDeposit: new FormControl('', [Validators.required]),
    customer: new FormControl('', [Validators.required]),
    services: new FormControl('', [Validators.required]),
  });
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private customerService: CustomerService,
              private facilityService: FacilityService,
              private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.customers = this.customerService.getCustomer();
    this.facilities = this.facilityService.getFacilities();
  }

  get contractStartDate() {
    return this.contractForm.get('contractStartDate');
  }

  get contractEndDate() {
    return this.contractForm.get('contractEndDate');
  }

  get contractDeposit() {
    return this.contractForm.get('contractDeposit');
  }

  // get contractTotalMoney() {
  //   return this.contractForm.get('contractTotalMoney');
  // }

  // get employee() {
  //   return this.contractForm.get('employee');
  // }

  get customer() {
    return this.contractForm.get('customer');
  }

  get services() {
    return this.contractForm.get('services');
  }

  onsubmit() {
    if (this.contractStartDate.value != '' && this.contractEndDate.value != '') {
      let startDateParse = new Date(this.contractStartDate.value);
      let endDateParse = new Date(this.contractEndDate.value);
      if (endDateParse < startDateParse) {
        this.contractStartDate.setErrors({dateErrors: 'End date must be after start date! Please choose again!'});
        this.contractEndDate.setErrors({dateErrors: 'End date must be after start date! Please choose again!'});
      }
    }
    if (this.contractDeposit.value != '') {
      if (this.contractDeposit.value < 0) {
        this.contractDeposit.setErrors({active: 'must be positive'});
      }
    }
    if (this.contractForm.invalid) {
      if (this.contractStartDate.value == '') {
        this.contractStartDate.setErrors({empty: 'Empty! Please choose!'});
      }
      if (this.contractEndDate.value == '') {
        this.contractEndDate.setErrors({empty: 'Empty! Please choose!'});
      }
      if (this.contractDeposit.value == '') {
        this.contractDeposit.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.customer.value == '') {
        this.customer.setErrors({empty: 'Empty! Please choose!'});
      }
      if (this.services.value == '') {
        this.services.setErrors({empty: 'Empty! Please choose!'});
      }
      this.router.navigateByUrl('/contract/contract-create');
    } else {
      const contract = this.contractForm.value;
      console.log(contract);
      this.contractService.createContract(contract);
      this.router.navigateByUrl('/contract/contract-list');
    }
  }
}
