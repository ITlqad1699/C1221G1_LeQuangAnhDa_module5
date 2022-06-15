import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractRoutingModule } from './contract-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContractCreateComponent} from './contract-create/contract-create.component';
import { ContractListComponent } from './contract-list/contract-list.component';



@NgModule({
  declarations: [
    ContractListComponent,
    ContractCreateComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    ContractRoutingModule,
  ]
})
export class ContractModule { }
