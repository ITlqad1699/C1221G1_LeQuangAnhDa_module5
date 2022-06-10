import { Component, OnInit } from '@angular/core';
import {Customer} from '../../models/customer';
import {Router} from '@angular/router';
import {CustomerService} from '../../services/customerService';
declare let createThreeDots: any;
declare let deleteCustomer: any;

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  p: number = 1;
  customers: Customer[];
  customerRoot: Customer;
  totalPages = 0;
  pageNumber = '';
  constructor(private router: Router,private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getAllCustomer();
    // tslint:disable-next-line:no-unused-expression
    new createThreeDots();
    // tslint:disable-next-line:no-unused-expression
    new deleteCustomer();
  }

  getAllCustomer(){
    this.customers = this.customerService.getCustomer();
    console.log(this.customers);
  }
}

