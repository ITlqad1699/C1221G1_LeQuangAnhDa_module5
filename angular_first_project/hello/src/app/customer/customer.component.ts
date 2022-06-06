import {Component, OnInit} from '@angular/core';
import {Customer} from './Customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [
    {customerNo: 1, name: 'Lê Quang Anh Đà', city: 'đà nẵng', state: 'hải châu', country: ' việt nam'},
    {customerNo: 2, name: 'Lê Quang Anh Đà', city: 'đà nẵng', state: 'hải châu', country: ' việt nam'},
    {customerNo: 3, name: 'Lê Quang Anh Đà', city: 'đà nẵng', state: 'hải châu', country: ' việt nam'},
    {customerNo: 4, name: 'Lê Quang Anh Đà', city: 'đà nẵng', state: 'hải châu', country: ' việt nam'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
