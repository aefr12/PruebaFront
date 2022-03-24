import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatilloService } from '../../services/platillo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: [
  ]
})
export class DetalleComponent implements OnInit {

  ingredients:any[] = [];
  cants:any[] = [];
  arrTemp: any[] = [];
  arrTemp2: any[] = [];
  platillo: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private platilloService: PlatilloService,
  ) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails(){
    const id = this.route.snapshot.params['id'];
    this.platilloService.getDetailsMeal(id).then(async (resp:any) => {
      this.platillo = resp;
      console.log(resp);
      for (const property in resp) {
        if(property.includes('strIngredient')){
          this.arrTemp.push(resp[property]);
        }
        if(property.includes('strMeasure')){
          this.arrTemp2.push(resp[property]);
        }
      }
      this.ingredients = await this.arrTemp.filter(Boolean);
      this.cants = await this.arrTemp2.filter(word => word.length > 2);
    });
  }

  regresar(){
    this.router.navigateByUrl('/platillos/lista');
  }

}
