import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs';

const api = environment.api;

@Injectable({
  providedIn: 'root'
})
export class PlatilloService {

  constructor(
    private http: HttpClient
  ) { }

  getRandomMeal(){
    return new Promise(resolve => {
      this.http.get(`${api}/random.php`).subscribe((resp:any) =>{
        return resolve(resp.meals[0]);
      });
    });
  }

  getDetailsMeal(id: string){
    return new Promise(resolve => {
      this.http.get(`${api}/lookup.php?i=${id}`).subscribe((resp:any) => {
        return resolve(resp.meals[0]);
      });
    });
  }

  getPlatillos(term?: string){
    return new Promise(resolve => {
      if(term !== undefined){
        this.http.get(`${api}/search.php?s=${term}`).subscribe((resp:any) => {
            console.log(resp);
            return resolve(resp.meals);
        });
      }
      else{
        this.http.get(`${api}/search.php?s=`).subscribe((resp:any) => {
          console.log(resp);
          return resolve(resp.meals);
      });
      }
    });
  }

  getPlatillosByIngredient(term: string){
    return new Promise(resolve => {
      this.http.get(`${api}/filter.php?i=${term}`).subscribe((resp:any) => {
        resolve(resp.meals);
      });
    });
  }
}
