import { Component, OnInit } from '@angular/core';
import { PlatilloService } from '../../services/platillo.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
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
export class ListaComponent implements OnInit {

  platillos: any[] = [];

  constructor(
    private router: Router,
    private platilloService: PlatilloService
  ) { }

  ngOnInit(): void {
    this.muestraAlerta();
  }

  muestraAlerta(){
    this.platilloService.getRandomMeal().then(async (resp:any) => {
      const { idMeal, strMeal, strMealThumb, strYoutube } = resp;
      Swal.fire({
        title: `${strMeal}`,
        html:
          '<b>Mira el video en Youtube</b><br> ' +
          '<h3>Deleita a tu paladar recreando esta deliciosa receta</h3>'+
          `<a href="${strYoutube}"><-- Click Aqui --></a> `,
        imageUrl: strMealThumb,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: strMeal,
        showCancelButton: true,
        confirmButtonText: 'Ver Receta',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        console.log(result);
        if(result.isConfirmed){
          this.router.navigateByUrl(`/platillos/detalle/${idMeal}`);
        }
        if(result.isDenied || result.isDismissed){
          this.listaPlatillos();
        }
      });
    });
  }

  listaPlatillos(){
    this.platilloService.getPlatillos().then((resp:any) => {
      this.platillos = resp;
    });
  }

}
