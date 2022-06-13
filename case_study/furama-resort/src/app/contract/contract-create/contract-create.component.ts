import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Customer} from 'src/app/customer/models/customer';
import {Facility} from 'src/app/facilities/models/facility';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from 'src/app/customer/service/customer-service';
import {FacilityService} from 'src/app/facilities/services/facility-service';
import {ContractService} from 'src/app/contract/service/contract-service';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractForm: FormGroup;
  customers: Customer[] = [];
  facilities: Facility[] = [];

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private customerService: CustomerService,
              private facilityService: FacilityService,
              private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.contractForm = this.fb.group({
      contractStartDate: ['', [Validators.required]],
      contractEndDate: ['', [Validators.required]],
      contractDeposit: ['', [Validators.required]],
      contractTotalMoney: ['', [Validators.required]],
      customer: [1, [Validators.required]],
      services: [1, [Validators.required]],
    });
    this.getAllCustomers();
    this.getAllFacility();
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

  get contractTotalMoney() {
    return this.contractForm.get('contractTotalMoney');
  }

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
        this.contractStartDate.setErrors({dateErrors: 'Start date must be before end date!'});
        this.contractEndDate.setErrors({dateErrors: 'End date must be after start date!'});
      }
    }
    if (this.contractForm.invalid) {
      if (this.contractDeposit.value != '') {
        if (this.contractDeposit.value < 0) {
          this.contractDeposit.setErrors({active: 'must be positive'});
        }
      }
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
      this.router.navigateByUrl('/contract-create');
    } else {
      const contract = this.contractForm.value;
      console.log(contract);
      this.contractService.createContract(contract);
      this.router.navigateByUrl('/contract-list');
    }
  }

  getAllCustomers() {
    this.customers = this.customerService.getCustomer();
  }

  getAllFacility() {
    this.facilities = this.facilityService.getFacilities();
  }
}
