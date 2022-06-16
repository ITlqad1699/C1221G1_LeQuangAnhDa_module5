import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from '../product/product-list/product-list.component';
import {ProductCreateComponent} from '../product/product-create/product-create.component';
import {ProductUpdateComponent} from '../product/product-update/product-update.component';
import {ImgSlideComponent} from './img-slider/img-slide/img-slide.component';
import {ImgSliderComponent} from './img-slider/img-slider.component';


const routes: Routes = [
  {path: 'img-slide', component: ImgSlideComponent},
  {path: 'img-slider', component: ImgSliderComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImgSlideRoutingModule { }
