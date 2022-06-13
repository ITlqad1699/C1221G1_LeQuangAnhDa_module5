import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductCreateComponent } from './product-manager/product-create/product-create.component';
import { ProductListComponent } from './product-manager/product-list/product-list.component';
import { ProductUpdateComponent } from './product-manager/product-update/product-update.component';
import { HeaderComponent } from './header/header.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DetailComponent } from './dictionary/detail/detail.component';
import { ListVolcabulariesComponent } from './dictionary/list-volcabularies/list-volcabularies.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    ProductManagerComponent,
    ProductCreateComponent,
    ProductListComponent,
    ProductUpdateComponent,
    HeaderComponent,
    DetailComponent,
    ListVolcabulariesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
