import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [
  ]
})
export class NavBarComponent implements OnInit {

  iniciado: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('idToken')){
      this.iniciado = true;
    }else{
      this.iniciado = false;
    }
  }

  cambiar(texto:string){
    this.router.navigateByUrl(`/${texto}`);
  }

  logout(){
    localStorage.removeItem('idToken');
    this.router.navigateByUrl('/auth');
  }

}
