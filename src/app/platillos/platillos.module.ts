import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './pages/lista/lista.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PlatilloRoutingModule } from './platillo-routing.module';
import { MaterialModule } from '../material/material.module';
import { PipesModule } from '../pipes/pipes.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    ListaComponent,
    DetalleComponent,
    BuscarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PlatilloRoutingModule,
    MaterialModule,
    PipesModule,
    FlexLayoutModule
  ]
})
export class PlatillosModule { }
