import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VideosComponent} from '../app/videos/videos.component'
import { EnderecosComponent } from './enderecos/enderecos.component';
import { FotosComponent } from './fotos/fotos.component';
import { SlideHomeComponent } from './slide-home/slide-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/slide', pathMatch: 'full' },
  {path:'slide',component:SlideHomeComponent},
  {path:'fotos',component:FotosComponent},
  {path:'videos',component:VideosComponent},
  {path:'endereco', component:EnderecosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
