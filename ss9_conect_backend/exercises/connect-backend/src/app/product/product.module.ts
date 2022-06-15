import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductUpdateComponent} from './product-update/product-update.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    ProductCreateComponent,
    ProductListComponent,
    ProductUpdateComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ProductModule { }
