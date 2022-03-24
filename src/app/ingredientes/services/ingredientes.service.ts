import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const api = environment.api;

@Injectable({
  providedIn: 'root'
})
export class IngredientesService {

  constructor(
    private http: HttpClient
  ) { }

  getIngredients(){
    return new Promise(resolve => {
      this.http.get(`${api}/list.php?i=list`).subscribe((resp:any) => {
        return resolve(resp.meals);
      });
    });
  }
}
