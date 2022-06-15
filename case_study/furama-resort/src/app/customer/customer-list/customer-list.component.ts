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
  pageNumber = '';
  idDelete = 0;
  nameDelete = '';e

  constructor(private router: Router, private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getAllCustomer();
    // tslint:disable-next-line:no-unused-expression
    new createThreeDots();
  }

  getAllCustomer() {
    this.customerService.getAllCustomerAPI()
      .subscribe(data => {
          this.customers = data;
        }, error => {
          console.log(error);
        }
      );
  }

  sendNameProduct(idValue: number, nameValue: string) {
    this.idDelete = idValue;
    this.nameDelete = nameValue;
  }

  deleteCustomer(closeModal: HTMLButtonElement) {
    this.customerService.fingByIdAPI(this.idDelete).subscribe(res => {
      this.customerDelete = res;
      console.log(this.customerDelete);
      this.customerService.deleteCustomerAPI(this.customerDelete.id).subscribe(() => {
        console.log("Delete success!");
        this.getAllCustomer();
        this.router.navigate(['/customer/customer-list']);
        closeModal.click();
      });
    });
  }
}

