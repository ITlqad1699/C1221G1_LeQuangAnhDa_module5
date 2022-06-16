import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgSlideRoutingModule } from './img-slide-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ShareRoutingModule} from '../share/share-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ImgSlideComponent} from './img-slider/img-slide/img-slide.component';
import {ImgSliderComponent} from './img-slider/img-slider.component';


@NgModule({
  declarations: [
    ImgSlideComponent,
    ImgSliderComponent
  ],
  exports: [
    ImgSlideComponent,
    ImgSliderComponent
  ],
  imports: [
    CommonModule,
    ImgSlideRoutingModule,
    HttpClientModule,
    ShareRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ImgSlideModule { }
