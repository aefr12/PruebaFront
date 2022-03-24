import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'configuracion',
        component: ConfiguracionComponent
      },
      {
        path: '**',
        redirectTo: 'configuracion'
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
export class PerfilRoutingModule { }
