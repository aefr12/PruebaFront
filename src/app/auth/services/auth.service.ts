import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

const api = environment.auth;
const key = environment.key;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userToken: string = '';

  constructor(
    private http: HttpClient
  ) {
    this.leerToken();
  }

  login(datos: FormGroup){
    return this.http.post(`${api}signInWithPassword?${key}`,datos).pipe(
      map( (resp:any) => {
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );
  }

  register(datos: FormGroup){
    return this.http.post(`${api}signUp?${key}`,datos).pipe(
      map( (resp:any) => {
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );
  }

  private guardarToken(idToken: string){
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

  }

  leerToken(){
    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token') || '';
    }
    else{
      this.userToken = "";
    }

    return this.userToken;
  }

  estaAutenticado(): boolean{
    return this.userToken.length > 7;
  }
}
