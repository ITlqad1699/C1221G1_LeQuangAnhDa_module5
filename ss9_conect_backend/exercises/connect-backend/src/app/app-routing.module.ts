import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo-app/todo/todo.module').then(module => module.TodoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
