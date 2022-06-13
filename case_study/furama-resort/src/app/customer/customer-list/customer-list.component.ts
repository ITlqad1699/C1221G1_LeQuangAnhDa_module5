import { Component, OnInit } from '@angular/core';
import {Customer} from '../../models/customer';
import {Router} from '@angular/router';
import {CustomerService} from '../../services/customer-service';
declare let createThreeDots: any;

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  p: number = 1;
  customers: Customer[];
  customerDelete: Customer;
  totalPages = 0;
  pageNumber = '';
  idDelete = 0;
  nameDelete = '';
  constructor(private router: Router,private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getAllCustomer();
    // tslint:disable-next-line:no-unused-expression
    new createThreeDots();
  }

  getAllCustomer(){
    this.customers = this.customerService.getCustomer();
    console.log(this.customers);
  }

  sendNameProduct(idValue: number, nameValue: string){
      this.idDelete = idValue;
      this.nameDelete = nameValue;
  }
  deleteCustomer(closeModal: HTMLButtonElement){
      this.customerDelete = this.customerService.findById(this.idDelete);
      this.customerService.deleteCustomer(this.customerDelete.customerId);
      this.router.navigate(['customer-list']);
      this.ngOnInit();
      console.log(this.customerDelete);
      closeModal.click();
  }
}

