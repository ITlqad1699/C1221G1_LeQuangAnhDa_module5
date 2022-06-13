import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularRegisterComponent } from './angular-register/angular-register.component';
import { LoginAngularComponent } from './login-angular/login-angular.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListRegisterComponent } from './list-register/list-register.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularRegisterComponent,
    LoginAngularComponent,
    ListRegisterComponent,
    HeaderComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
