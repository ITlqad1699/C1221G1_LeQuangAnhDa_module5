import { NgModule } from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {FacilityListComponent} from './facility-list/facility-list.component';
import {FacilityCreateComponent} from './facility-create/facility-create.component';
import {FacilityEditComponent} from './facility-edit/facility-edit.component';

const routes: Routes = [
  {path: 'facility-list', component: FacilityListComponent},
  {path: 'facility-create', component: FacilityCreateComponent},
  {path: 'facility-edit/:id', component: FacilityEditComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }
