import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},

  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./contract/contract.module').then(module => module.ContractModule)
  },
  {
    path: 'facility',
    loadChildren: () => import('./facilities/facility.module').then(module => module.FacilityModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
