import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginAngularComponent} from './login-angular/login-angular.component';
import {ListRegisterComponent} from './list-register/list-register.component';
import {AngularRegisterComponent} from './angular-register/angular-register.component';


const routes: Routes = [
  {path: '', component: LoginAngularComponent},
  {path: 'register-list', component: ListRegisterComponent},
  {path: 'register-angular', component: AngularRegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
