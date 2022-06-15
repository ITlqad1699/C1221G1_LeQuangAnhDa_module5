import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionaryComponent } from './exercises/dictionary/dictionary.component';
import { ProductManagerComponent } from './exercises/product-manager/product-manager.component';
import { ProductCreateComponent } from './exercises/product-manager/product-create/product-create.component';
import { ProductListComponent } from './exercises/product-manager/product-list/product-list.component';
import { ProductUpdateComponent } from './exercises/product-manager/product-update/product-update.component';
import { HeaderComponent } from './header/header.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DetailComponent } from './exercises/dictionary/detail/detail.component';
import { ListVolcabulariesComponent } from './exercises/dictionary/list-volcabularies/list-volcabularies.component';
import { TimelinesComponent } from './practices/timelines-project/timelines/timelines.component';
// import { SongComponent } from './practices/song-project/song/song.component';
// import { YoutubePlayerComponent } from './practices/song-project/song/youtube-player/youtube-player.component';
// import { YoutubePlaylistComponent } from './practices/song-project/song/youtube-playlist/youtube-playlist.component';

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
    ListVolcabulariesComponent,
    TimelinesComponent,
    // SongComponent,
    // YoutubePlayerComponent,
    // YoutubePlaylistComponent
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
