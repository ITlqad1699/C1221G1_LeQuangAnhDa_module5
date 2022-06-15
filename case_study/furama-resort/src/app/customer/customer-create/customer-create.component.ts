import {Component, OnInit} from '@angular/core';
import {Customer} from 'src/app/customer/models/customer';
import {CustomerType} from 'src/app/customer/models/customerType';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CustomerService} from '../customer.service';
import {CustomerTypeService} from '../customer-type.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customer: Customer;
  customers: Customer[] = [];
  customerTypes: CustomerType[] = [];
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    customerCode: new FormControl('', [Validators.required, Validators.pattern('^$|^KH-[\\d]{4}$')]),
    customerName: new FormControl('', [Validators.required, Validators.pattern('^$|^[A-Za-z ]+$')]),
    customerBirthday: new FormControl('', [Validators.required, Validators.pattern('^$|^\\d{4}-\\d{2}-\\d{2}$')]),
    customerGender: new FormControl('', Validators.required),
    customerIdCard: new FormControl('', [Validators.required, Validators.pattern('^$|^\\d{9}$')]),
    customerPhone: new FormControl('', [Validators.required, Validators.pattern('^(091|090|\\(\\+84\\)90|\\(\\+84\\)91)\\d{7}$')]),
    customerEmail: new FormControl('', [Validators.required, Validators.email]),
    customerAddress: new FormControl('', Validators.required),
    customerType: new FormControl('', Validators.required),
    active: new FormControl(1)
  });

  get customerCode() {
    return this.customerForm.get('customerCode');
  }

  get customerName() {
    return this.customerForm.get('customerName');
  }

  get customerBirthday() {
    return this.customerForm.get('customerBirthday');
  }

  get customerGender() {
    return this.customerForm.get('customerGender');
  }

  get customerIdCard() {
    return this.customerForm.get('customerIdCard');
  }

  get customerPhone() {
    return this.customerForm.get('customerPhone');
  }

  get customerEmail() {
    return this.customerForm.get('customerEmail');
  }

  get customerAddress() {
    return this.customerForm.get('customerAddress');
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
      if (this.customerName.value == '') {
        this.customerName.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.customerBirthday.value == '') {
        this.customerBirthday.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.customerGender.value == null) {
        this.customerGender.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.customerIdCard.value == '') {
        this.customerIdCard.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.customerPhone.value == '') {
        this.customerPhone.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.customerEmail.value == '') {
        this.customerEmail.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.customerGender.value == '') {
        this.customerGender.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.customerAddress.value == '') {
        this.customerAddress.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.customerType.value == '') {
        this.customerType.setErrors({empty: 'Empty! Please input!'});
      }

      this.router.navigateByUrl('/customer/customer-create');
    } else {
      const customer = this.customerForm.value;
      console.log(customer);
      this.customerService.createCustomerAPI(customer).subscribe(() => {
          this.customerForm.reset();
          this.router.navigateByUrl('/customer/customer-list');
          console.log('Add success!');
        },
        (error) => {
          if (!error.error.status) {
            this.customerCode.setErrors({existed: error.error.errorMap.customerCode});
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
