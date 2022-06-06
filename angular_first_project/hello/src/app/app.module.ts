import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListStudentComponent } from './list-student/list-student.component';
import {FormsModule} from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { StyleNgCssComponent } from './style-ng-css/style-ng-css.component';
import { HighLightDirective } from './high-light.directive';
import { TemConverterPipe } from './temConverter.pipe';
import { ChildComponent } from './data-father-to-child/child.component';
import { DataChildToFatherComponent } from './data-child-to-father/data-child-to-father.component';
import { AnComponentLifeComponent } from './an-component-life/an-component-life.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ListStudentComponent,
    CustomerComponent,
    EmployeeComponent,
    StyleNgCssComponent,
    HighLightDirective,
    TemConverterPipe,
    ChildComponent,
    DataChildToFatherComponent,
    AnComponentLifeComponent,
    CustomerListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
