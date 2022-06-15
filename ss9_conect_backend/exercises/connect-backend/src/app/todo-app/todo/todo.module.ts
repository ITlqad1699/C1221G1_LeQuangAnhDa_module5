import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import {TodoComponent} from './todo.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    TodoComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class TodoModule { }
