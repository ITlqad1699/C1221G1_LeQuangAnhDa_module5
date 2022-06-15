import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FacilityRoutingModule} from './facility-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FacilityListComponent} from './facility-list/facility-list.component';
import {FacilityCreateComponent} from './facility-create/facility-create.component';
import {FacilityEditComponent} from './facility-edit/facility-edit.component';

@NgModule({
  declarations: [
    FacilityListComponent,
    FacilityCreateComponent,
    FacilityEditComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    FacilityRoutingModule
  ]
})
export class FacilityModule {
}
