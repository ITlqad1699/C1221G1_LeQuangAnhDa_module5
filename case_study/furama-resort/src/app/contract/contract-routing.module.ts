import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContractListComponent} from './contract-list/contract-list.component';
import {ContractCreateComponent} from './contract-create/contract-create.component';

const routes: Routes = [
  {path: 'contract-list', component: ContractListComponent},
  {path: 'contract-create', component: ContractCreateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule {
}
