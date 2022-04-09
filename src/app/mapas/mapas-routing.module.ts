import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { HomeMapasComponent } from './pages/home-mapas/home-mapas.component';

const routes: Routes = [
  {
    path: '',
    component: HomeMapasComponent,
    children: [
      { path: 'marcadores', component: MarcadoresComponent },
      { path: '**', redirectTo: 'marcadores' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapasRoutingModule { }
