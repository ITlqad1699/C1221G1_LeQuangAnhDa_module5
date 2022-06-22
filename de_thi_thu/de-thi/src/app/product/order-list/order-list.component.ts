import {Component, ElementRef, OnInit, Pipe, PipeTransform, ViewChild} from '@angular/core';
import {OderService} from "../oder.service";
import {Order} from "../model/order";
import {Product} from "../model/product";
import {Router} from "@angular/router";

declare let createThreeDots: any;

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit{

  @ViewChild('dateStart') dateStart: ElementRef;
  @ViewChild('dateEnd') dateEnd: ElementRef;
  orders: Order[];
  products: Product[];
  totalMoney: number;
  nameDelete: string;
  idDelete: number;
  p: number = 1;
  searchText: any;

  constructor(private oderService: OderService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllOrders();
    this.getProducts();
    // tslint:disable-next-line:no-unused-expression
    new createThreeDots();
  }

  getAllOrders() {
    this.oderService.getAllOrderAPI()
      .subscribe(orders => {
          this.orders = orders;
        }, error => {
          console.log(error);
        }
      );
  }

  getProducts() {
    this.oderService.getAllProduct()
      .subscribe(products => {
          this.products = products;
        }, error => {
          console.log(error);
        }
      );
  }


  deleteOrder(closeModal: HTMLButtonElement) {

  }

  sendNameProduct(id: any, name: any) {

  }

  search() {
    let searchStartDate = new Date(this.dateStart.nativeElement.value);
    let searchEndDate = new Date(this.dateEnd.nativeElement.value);
    console.log(this.dateEnd)
    console.log(searchEndDate);
    // if('' == this.dateStart && this.dateEnd == '') {
    //
    // }
  }


}
