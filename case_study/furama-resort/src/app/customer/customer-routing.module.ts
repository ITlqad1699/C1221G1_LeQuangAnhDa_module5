import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';

const routes: Routes = [
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'customer-edit/:id', component: CustomerEditComponent},
  {path: 'customer-create', component: CustomerCreateComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
