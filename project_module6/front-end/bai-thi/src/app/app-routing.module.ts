import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from './transport/list/list.component';
import {UpdateComponent} from './transport/update/update.component';
import {CreateComponent} from './transport/create/create.component';


const routes: Routes = [
  {
    path: '', component: ListComponent
  },
  {
    path: 'update/:id', component: UpdateComponent
  },
  {
    path: 'create', component: CreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
