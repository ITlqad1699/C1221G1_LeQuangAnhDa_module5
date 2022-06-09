import {Component, OnInit} from '@angular/core';
import {Customer} from 'src/app/models/Customer';
import {CustomerType} from 'src/app/models/CustomerType';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CustomerService} from '../../services/CustomerService';
import {CustomerTypeService} from '../../services/CustomerTypeService';

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
    customerCode: new FormControl("", [Validators.required, Validators.pattern('^$|^KH-[\\d]{4}$')]),
    customerName: new FormControl("",[Validators.required, Validators.pattern('^$|^[A-Za-z ]+$')]),
    customerBirthday: new FormControl("", [Validators.required,Validators.pattern('^$|^\\d{4}-\\d{2}-\\d{2}$')]),
    customerGender: new FormControl("", Validators.required),
    customerIdCard: new FormControl("", [Validators.required, Validators.pattern('^$|^\\d{9}$')]),
    customerPhone: new FormControl("", [Validators.required, Validators.pattern('^(091|090|\\(\\+84\\)90|\\(\\+84\\)91)\\d{7}$')]),
    //check lại validate number phone
    customerEmail: new FormControl("", [Validators.required, Validators.email]),
    customerAddress: new FormControl("", Validators.required),
    customerType: new FormControl("", Validators.required)
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
  onSubmit(){
    console.log(this.customerForm.value);
    const customer = this.customerForm.value;
    console.log(customer)
    this.customerService.createCustomer(customer);
    this.customerForm.reset();
  }
  //tới đoạn này
  ngOnInit(): void {
    this.customerTypes = this.customerTypeService.getCustomerTypes();
  }

}
