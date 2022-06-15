import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomerRoutingModule} from './customer-routing.module';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    CustomerRoutingModule,
    HttpClientModule
  ]
})
export class CustomerModule { }
