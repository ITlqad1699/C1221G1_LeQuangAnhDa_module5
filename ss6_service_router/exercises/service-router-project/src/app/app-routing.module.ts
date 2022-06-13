import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product-manager/product-list/product-list.component';
import {ProductCreateComponent} from './product-manager/product-create/product-create.component';
import {ProductUpdateComponent} from './product-manager/product-update/product-update.component';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {ListVolcabulariesComponent} from './dictionary/list-volcabularies/list-volcabularies.component';


const routes: Routes = [
  {path: 'product-list', component: ProductListComponent},
  {path: 'product-create', component: ProductCreateComponent},
  {path: 'product-update/:id', component: ProductUpdateComponent},
  {path: 'dictionary', component: DictionaryComponent},
  {path: 'vocabulary-list', component: ListVolcabulariesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
