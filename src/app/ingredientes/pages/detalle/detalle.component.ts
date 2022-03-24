import { Component, OnInit } from '@angular/core';
import { PlatilloService } from '../../../platillos/services/platillo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: [`
    mat-card{
      margin-top: 20px;
    }
    `]
})
export class DetalleComponent implements OnInit {

  platillos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private platillosService: PlatilloService
  ) { }

  ngOnInit(): void {
    this.searchPlatillos();
  }

  searchPlatillos(){
    const term = this.route.snapshot.params['nombre'];
    this.platillosService.getPlatillosByIngredient(term).then(async (resp:any) => {
      this.platillos = await resp;
    });
  }

}
