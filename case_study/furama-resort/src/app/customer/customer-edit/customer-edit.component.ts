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
        name: new FormControl('', [Validators.required, Validators.pattern('^$|^[A-Za-z ]+$')]),
        birthDay: new FormControl('', [Validators.required, Validators.pattern('^$|^\\d{4}-\\d{2}-\\d{2}$')]),
        gender: new FormControl('', Validators.required),
        idCard: new FormControl('', [Validators.required, Validators.pattern('^$|^\\d{9}$')]),
        phone: new FormControl('', [Validators.required, Validators.pattern('^(091|090|\\(\\+84\\)90|\\(\\+84\\)91)\\d{7}$')]),
        email: new FormControl('', [Validators.required, Validators.email]),
        address: new FormControl('', Validators.required),
        customerType: new FormControl('', Validators.required),
      });
    });
  }
  get active(){
    return this.customerForm.get('active');
  }
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

  ngOnInit(): void {
      this.getAllCustomerTypes();
      this.findByid(this.id);
  }

  findByid(id: number) {
    return this.customerService.findById(id).subscribe(customer => {
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
    console.log(customer);
    this.customerService.updateCustomer(id, customer).subscribe(() => {
      this.customerForm.reset();
      console.log('Add success!');
      this.router.navigateByUrl('/customer/customer-list');
    },error => {
      console.log(error);
    });
  }

  compareFn(t1, t2): boolean {
    return t1 && t2 ? t1.customerTypeId === t2.customerTypeId : t1 === t2;
  }
}
