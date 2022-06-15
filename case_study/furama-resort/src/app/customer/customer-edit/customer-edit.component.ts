import {Component, OnInit} from '@angular/core';
import {Customer} from '../models/customer';
import {CustomerType} from '../models/customerType';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {CustomerService} from '../customer.service';
import {CustomerTypeService} from '../customer-type.service';
import {Subscription} from 'rxjs';

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
  private subcription: Subscription;
  constructor(private router: Router,
              private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private route: ActivatedRoute) {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      console.log(this.id);
      this.customerForm = new FormGroup({
        id: new FormControl('', [Validators.required]),
        customerCode: new FormControl('', [Validators.required, Validators.pattern('^$|^KH-[\\d]{4}$')]),
        customerName: new FormControl('', [Validators.required, Validators.pattern('^$|^[A-Za-z ]+$')]),
        customerBirthday: new FormControl('', [Validators.required, Validators.pattern('^$|^\\d{4}-\\d{2}-\\d{2}$')]),
        customerGender: new FormControl('', Validators.required),
        customerIdCard: new FormControl('', [Validators.required, Validators.pattern('^$|^\\d{9}$')]),
        customerPhone: new FormControl('', [Validators.required, Validators.pattern('^(091|090|\\(\\+84\\)90|\\(\\+84\\)91)\\d{7}$')]),
        customerEmail: new FormControl('', [Validators.required, Validators.email]),
        customerAddress: new FormControl('', Validators.required),
        customerType: new FormControl('', Validators.required),
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
      this.getAllCustomerTypes();
      this.findByid(this.id);
  }

  findByid(id: number) {
    return this.customerService.fingByIdAPI(id).subscribe(customer => {
      this.customer = customer;
        console.log(this.customer);
        this.customerForm.patchValue(this.customer);
    });
  }

  getAllCustomerTypes() {
    this.customerTypeService.getAllCustomerType().subscribe(
      data => {
        this.customerTypes = data;
      }, error => {
        console.log(error);
      });
  }

  updateCustomer(id: number){
    const customer = this.customerForm.value;
    this.customerService.updateCustomerAPI(id, customer).subscribe(() => {
      this.customerForm.reset();
      console.log('Add success!');
    },error => {
      console.log(error);
    });
  }

  compareFn(t1, t2): boolean {
    return t1 && t2 ? t1.customerTypeId === t2.customerTypeId : t1 === t2;
  }
}
