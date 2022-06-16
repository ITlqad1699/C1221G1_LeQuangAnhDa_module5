import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ShareModule} from './share/share.module';
import {ImgSlideModule} from './image-slide/img-slide.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ShareModule,
    ImgSlideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
