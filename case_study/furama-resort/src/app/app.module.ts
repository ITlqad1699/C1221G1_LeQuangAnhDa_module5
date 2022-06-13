import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';
import { FacilityListComponent } from './facilities/facility-list/facility-list.component';
import { FacilityCreateComponent } from './facilities/facility-create/facility-create.component';
import { FacilityEditComponent } from './facilities/facility-edit/facility-edit.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    ContractListComponent,
    ContractCreateComponent,
    FacilityListComponent,
    FacilityCreateComponent,
    FacilityEditComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxPaginationModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
