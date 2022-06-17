import {Component, OnInit} from '@angular/core';
import {Customer} from '../models/customer';
import {Router} from '@angular/router';
import {CustomerService} from '../customer.service';
import {Subscription} from 'rxjs';

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
  pageNumber: number;
  idDelete = 0;
  nameDelete = '';
  e;
  flag = false;

  constructor(private router: Router, private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getCustomers();
    // tslint:disable-next-line:no-unused-expression
    new createThreeDots();
  }

  getCustomers() {
    this.customerService.getCustomers(this.pageNumber).subscribe(customers => {
      console.log(customers);
      this.flag = false;
      //@ts-ignore
      this.customers = customers.content;
      // @ts-ignore
      this.totalPages = customers.totalPages;
      // @ts-ignore
      this.pageNumber = customers.pageable.pageNumber;
    }, error => {
      this.customers = [];
      console.log(error);
    });
  }

  // getAllCustomer() {
  //   this.customerService.getAllCustomerAPI()
  //     .subscribe(customers => {
  //         this.customers = customers;
  //       }, error => {
  //         console.log(error);
  //       }
  //     );
  // }

  sendNameProduct(idValue: number, nameValue: string) {
    this.idDelete = idValue;
    this.nameDelete = nameValue;
  }

  deleteCustomer(closeModal: HTMLButtonElement) {
    this.customerService.findById(this.idDelete).subscribe(res => {
      this.customerDelete = res;
      console.log(this.customerDelete);
      this.customerService.deleteCustomer(this.idDelete).subscribe(() => {
        console.log(this.customerDelete.id);
        console.log('Delete success!');
        this.ngOnInit();
        this.router.navigate(['/customer/customer-list']);
        closeModal.click();
      });
    }, error => {
      console.log(error);
    });
  }

  previousPage() {
    this.customerService.getCustomers(this.pageNumber - 1).subscribe(customers => {
      // @ts-ignore
      this.customers = customers.content;
      // @ts-ignore
      this.totalPages = customers.totalPages;
      // @ts-ignore
      this.pageNumber = customers.pageable.pageNumber;
    });
  };

  nextPage() {
    this.customerService.getCustomers(this.pageNumber + 1).subscribe(customers => {
      // @ts-ignore
      this.customers = customers.content;
      // @ts-ignore
      this.totalPages = customers.totalPages;
      // @ts-ignore
      this.pageNumber = customers.pageable.pageNumber;
    });
  }
}

