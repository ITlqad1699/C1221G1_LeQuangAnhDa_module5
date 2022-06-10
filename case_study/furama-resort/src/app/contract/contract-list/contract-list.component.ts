import { Component, OnInit } from '@angular/core';
import {ContractService} from '../../services/contractService';
import {Router} from '@angular/router';
import {Contract} from '../../models/contract';
declare let createThreeDots: any;
declare let deleteCustomer: any;
@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  p: number = 1;
  contracts: Contract[];
  constructor(private contractService: ContractService, private router: Router) { }

  ngOnInit(): void {
    this.getContracts();
    // tslint:disable-next-line:no-unused-expression
    new createThreeDots();
    // tslint:disable-next-line:no-unused-expression
    new deleteCustomer();
  }

  public getContracts(){
      this.contracts = this.contractService.getContracts();
      console.log(this.contracts);
  }
}
