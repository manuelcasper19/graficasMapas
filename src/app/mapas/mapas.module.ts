import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapasRoutingModule } from './mapas-routing.module';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { MaterialModule } from '../material/material.module';
import { HomeMapasComponent } from './pages/home-mapas/home-mapas.component';


@NgModule({
  declarations: [
    MarcadoresComponent,
    HomeMapasComponent
  ],
  imports: [
    CommonModule,
    MapasRoutingModule,
    MaterialModule
  ]
})
export class MapasModule { }
