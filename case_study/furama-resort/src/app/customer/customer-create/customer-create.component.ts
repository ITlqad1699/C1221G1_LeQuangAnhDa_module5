import {Component, OnInit} from '@angular/core';
import {Customer} from 'src/app/customer/models/customer';
import {CustomerType} from 'src/app/customer/models/customerType';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CustomerService} from '../customer.service';
import {CustomerTypeService} from '../customer-type.service';
import {CustomerDto} from '../../dto/customer-dto';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customer: Customer;
  customerDto: CustomerDto;
  customers: Customer[] = [];
  customerTypes: CustomerType[] = [];
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    customerCode: new FormControl('', [Validators.required, Validators.pattern('^$|^KH-[\\d]{4}$')]),
    name: new FormControl('', [Validators.required, Validators.pattern('^$|^[A-Za-z ]+$')]),
    birthDay: new FormControl('', [Validators.required, Validators.pattern('^$|^\\d{4}-\\d{2}-\\d{2}$')]),
    gender: new FormControl('', Validators.required),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^$|^\\d{9}$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(091|090|\\(\\+84\\)90|\\(\\+84\\)91)\\d{7}$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required),
    customerType: new FormControl('', Validators.required),
  });

  get customerCode() {
    return this.customerForm.get('customerCode');
  }

  get name() {
    return this.customerForm.get('name');
  }

  get birthDay() {
    return this.customerForm.get('birthDay');
  }

  get gender() {
    return this.customerForm.get('gender');
  }

  get idCard() {
    return this.customerForm.get('idCard');
  }

  get phone() {
    return this.customerForm.get('phone');
  }

  get email() {
    return this.customerForm.get('email');
  }

  get address() {
    return this.customerForm.get('address');
  }

  get customerType() {
    return this.customerForm.get('customerType');
  }

  constructor(private router: Router,
              private customerService: CustomerService,
              private customerTypeService: CustomerTypeService) {
  }

  onSubmit() {
    if (this.customerForm.invalid) {
      if (this.customerCode.value == '') {
        this.customerCode.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.name.value == '') {
        this.name.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.birthDay.value == '') {
        this.birthDay.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.gender.value == null) {
        this.gender.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.idCard.value == '') {
        this.idCard.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.phone.value == '') {
        this.phone.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.email.value == '') {
        this.email.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.gender.value == '') {
        this.gender.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.address.value == '') {
        this.address.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.customerType.value == '') {
        this.customerType.setErrors({empty: 'Empty! Please input!'});
      }

      this.router.navigateByUrl('/customer/customer-create');
    } else {
      this.customerDto = this.customerForm.value;
      console.log(this.customerDto);
      this.customerService.createCustomer(this.customerDto).subscribe(() => {
          this.customerForm.reset();
          this.router.navigateByUrl('/customer/customer-list');
          console.log('Add success!');
        },
        (error) => {
          if (!error.error.status) {
            this.router.navigateByUrl('/customer/customer-create');
          }
        });
    }

  }

  ngOnInit(): void {
    // this.customerTypes = this.customerTypeService.getCustomerTypes();
    this.getAllCustomerTypes();
  }

  getAllCustomerTypes() {
    this.customerTypeService.getAllCustomerType().subscribe(
      data => {
        this.customerTypes = data;
      }, error => {
        console.log(error);
      });
  }
}
