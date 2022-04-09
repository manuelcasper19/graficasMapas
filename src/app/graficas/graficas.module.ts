import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';

import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasGraficaComponent } from './components/barras-grafica/barras-grafica.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonasGraficaComponent } from './components/donas-grafica/donas-grafica.component';
import { GraficasRoutingModule } from './graficas-routing.module';
import { TodoComponent } from './pages/todo/todo.component';
import { RendimientoIndividualComponent } from './pages/rendimiento-individual/rendimiento-individual.component';
import { HomeComponent } from './pages/home/home.component';





@NgModule({
  declarations: [
    BarrasComponent,
    DonaComponent,
    TodoComponent,
    BarrasGraficaComponent,
    DonasGraficaComponent,
    RendimientoIndividualComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule,
    NgChartsModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class GraficasModule { }
