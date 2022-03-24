import { Component, OnInit } from '@angular/core';
import { IngredientesService } from '../../services/ingredientes.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [`
  mat-card{
      margin-top: 20px;
    }
    p{
      width:100%;
      color:white;
      overflow:hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  `]
})
export class InicioComponent implements OnInit {

  ingredientes: any[] = [];

  constructor(
    private ingredientesService: IngredientesService
  ) { }

  ngOnInit(): void {
    this.mostrarLista();
  }

  mostrarLista(){
    this.ingredientesService.getIngredients().then(async (resp:any) => {
      this.ingredientes = resp;
    });
  }

}
