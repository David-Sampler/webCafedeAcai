import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { SlideHomeComponent } from './slide-home/slide-home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VideosComponent } from './videos/videos.component';
import { ReactiveFormsModule } from '@angular/forms';
import {EnderecosComponent} from './enderecos/enderecos.component'

import { RouterModule, Routes } from '@angular/router';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { SafePipe } from '../sife.pipe';
import { TopoComponent } from './topo/topo.component';
import { FotosComponent } from './fotos/fotos.component';
import { SlidefotosComponent } from './slidefotos/slidefotos.component'
import { HttpClientModule } from '@angular/common/http'

import { NgxMaskModule, IConfig } from 'ngx-mask'

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SlideHomeComponent,
    VideosComponent,
    EnderecosComponent,SafePipe, TopoComponent, FotosComponent, SlidefotosComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule,
    YouTubePlayerModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent,
   ]
})
export class AppModule { }
