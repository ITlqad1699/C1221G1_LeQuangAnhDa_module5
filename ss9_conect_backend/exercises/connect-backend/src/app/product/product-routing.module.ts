import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductUpdateComponent} from './product-update/product-update.component';


const routes: Routes = [
  {path: 'product-list', component: ProductListComponent},
  {path: 'product-create', component: ProductCreateComponent},
  {path: 'product-update/:id', component: ProductUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
