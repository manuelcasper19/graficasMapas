import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasComponent } from './pages/barras/barras.component';
import { DonaComponent } from './pages/dona/dona.component';
import { RendimientoIndividualComponent } from './pages/rendimiento-individual/rendimiento-individual.component';
import { TodoComponent } from './pages/todo/todo.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children: [
      { path: 'barras', component: BarrasComponent },
      { path: 'donas',  component: DonaComponent },
      { path: 'todas',  component: TodoComponent },
      { path: 'rendimiento-individual',  component: RendimientoIndividualComponent },
      { path: '**',  redirectTo: 'barras' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
