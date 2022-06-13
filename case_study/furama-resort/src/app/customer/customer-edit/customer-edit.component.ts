import {Component, OnInit} from '@angular/core';
import {Customer} from '../../models/customer';
import {CustomerType} from '../../models/customerType';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {CustomerService} from '../../services/customer-service';
import {CustomerTypeService} from '../../services/customer-type-service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer: Customer;
  id: number;
  customers: Customer[] = [];
  customerTypes: CustomerType[] = [];
  customerForm: FormGroup;

  constructor(private router: Router,
              private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private route: ActivatedRoute) {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      console.log(this.id);
      const customer = this.findByid(this.id);
      this.customerForm = new FormGroup({
        customerId: new FormControl(customer.customerId, [Validators.required]),
        customerCode: new FormControl(customer.customerCode, [Validators.required, Validators.pattern('^$|^KH-[\\d]{4}$')]),
        customerName: new FormControl(customer.customerName, [Validators.required, Validators.pattern('^$|^[A-Za-z ]+$')]),
        customerBirthday: new FormControl(customer.customerBirthday, [Validators.required, Validators.pattern('^$|^\\d{4}-\\d{2}-\\d{2}$')]),
        customerGender: new FormControl(customer.customerGender, Validators.required),
        customerIdCard: new FormControl(customer.customerIdCard, [Validators.required, Validators.pattern('^$|^\\d{9}$')]),
        customerPhone: new FormControl(customer.customerPhone, [Validators.required, Validators.pattern('^(091|090|\\(\\+84\\)90|\\(\\+84\\)91)\\d{7}$')]),
        //check lại validate number phone
        customerEmail: new FormControl(customer.customerEmail, [Validators.required, Validators.email]),
        customerAddress: new FormControl(customer.customerAddress, Validators.required),
        customerType: new FormControl(customer.customerType, Validators.required),
        active: new FormControl()
      });
    });
  }
  get active(){
    return this.customerForm.get('active');
  }
  get customerId() {
    return this.customerForm.get('customerId');
  }

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

  ngOnInit(): void {
    this.customerTypes = this.customerTypeService.getCustomerTypes();
  }

  findByid(id: number) {
    return this.customerService.findById(id);
  }

  updateCustomer(customerId: number){
    const customer = this.customerForm.value;
    console.log(customer);
    this.customerService.updateCustomer(customerId, customer);
  }

  compareFn(t1, t2): boolean {
    return t1 && t2 ? t1.customerTypeId === t2.customerTypeId : t1 === t2;
  }
}
