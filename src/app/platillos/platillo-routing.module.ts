import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './pages/lista/lista.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'lista',
        component: ListaComponent
      },
      {
        path: 'detalle/:id',
        component: DetalleComponent
      },
      {
        path: 'buscar',
        component: BuscarComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '**',
        redirectTo: 'lista'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PlatilloRoutingModule { }
