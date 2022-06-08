import {Component, OnInit} from '@angular/core';
declare let createThreeDots: any;
declare let deleteCustomer: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'furama-resort';

  ngOnInit(): void {
    // tslint:disable-next-line:no-unused-expression
    new createThreeDots();
    // tslint:disable-next-line:no-unused-expression
    new deleteCustomer();
  }
}
