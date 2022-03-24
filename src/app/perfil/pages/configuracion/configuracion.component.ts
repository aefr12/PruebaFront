import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styles: [
  ]
})
export class ConfiguracionComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('idToken');
    this.router.navigateByUrl('/auth');
  }

}
