import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrderListComponent} from "./product/order-list/order-list.component";
import {OrderCreateComponent} from "./product/order-create/order-create.component";
import {OrderUpdateComponent} from "./product/order-update/order-update.component";


const routes: Routes = [
  {
    path: 'order-list', component: OrderListComponent
  },
  {
    path: 'order-create', component: OrderCreateComponent
  },
  {
    path: 'order-update/:id', component: OrderUpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
