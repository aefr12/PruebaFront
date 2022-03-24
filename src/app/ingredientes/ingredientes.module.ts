import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

import { IngredientesRoutingModule } from './ingredientes-routing.module';

import { InicioComponent } from './pages/inicio/inicio.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    InicioComponent,
    DetalleComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    IngredientesRoutingModule,
    MaterialModule,
    PipesModule
  ]
})
export class IngredientesModule { }
