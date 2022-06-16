import {Component, OnInit} from '@angular/core';
import {ContractService} from '../contract.service';
import {Router} from '@angular/router';
import {Contract} from '../models/contract';

declare let createThreeDots: any;

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  p: number = 1;
  contracts: Contract[];
  idDelete = 0;
  nameDelete = '';
  contractDelete: Contract;

  constructor(private contractService: ContractService, private router: Router) {
  }

  ngOnInit(): void {
    this.getContracts();
    // tslint:disable-next-line:no-unused-expression
    new createThreeDots();
  }

  public getContracts() {
    this.contractService.getAllContractAPI().subscribe(contracts => {
      this.contracts = contracts;
      console.log(this.contracts);
    }, error => {
      console.log(error);
    });
  }

  sendNameProduct(idValue: number, nameValue: string) {
    this.idDelete = idValue;
    this.nameDelete = nameValue;
  }

  deleteContract(closeModal: HTMLButtonElement) {
    this.contractService.fingByIdAPI(this.idDelete).subscribe(res => {
      this.contractDelete = res;
      console.log(this.contractDelete);
      this.contractService.deleteContractAPI(this.contractDelete.id).subscribe(() => {
        this.ngOnInit();
        console.log(this.contractDelete);
        this.router.navigateByUrl('/contract/contract-list');
        closeModal.click();
      }, error => {
        console.log(error);
      });
    }, error => {
      console.log(error);
    });
  }
}
