import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryCreateComponent} from './category-create/category-create.component';
import {CategoryUpdateComponent} from './category-update/category-update.component';


const routes: Routes = [
  {path: 'category-list', component: CategoryListComponent},
  {path: 'category-create', component: CategoryCreateComponent},
  {path: 'category-update/:id', component: CategoryUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
