import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { SharedModule } from '../shared/shared.module';
import { PerfilRoutingModule } from './perfil-routing.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ConfiguracionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PerfilRoutingModule,
    MaterialModule
  ]
})
export class PerfilModule { }
