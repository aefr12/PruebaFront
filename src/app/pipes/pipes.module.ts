import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizerPipe } from './dom-sanitizer.pipe';
import { ImagenPipe } from './imagen.pipe';
import { TranslatePipe } from './translate.pipe';



@NgModule({
  declarations: [
    DomSanitizerPipe,
    ImagenPipe,
    TranslatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DomSanitizerPipe,
    ImagenPipe
  ]
})
export class PipesModule { }
