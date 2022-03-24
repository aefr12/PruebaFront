import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  iniciar = this.fb.group({
    email: [Validators.required],
    password: [Validators.required],
    recordarme: false,
    returnSecureToken: true
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('email')){
      this.iniciar.setValue({email: localStorage.getItem('email')});
    }
  }

  get emailInvalid(){
    return this.iniciar.get('email')?.invalid && this.iniciar.get('email')?.touched;
  }

  get passwordInvalid(){
    return this.iniciar.get('password')?.invalid && this.iniciar.get('password')?.touched;
  }

  login() {
    if(this.iniciar.invalid){
      return Object.values(this.iniciar.controls).forEach(control => {
        control.markAsTouched();
      });
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });

    Swal.showLoading();

    this.authService.login(this.iniciar.value).subscribe(async (resp:any) => {
      Swal.close();
      if(this.iniciar.get('recordarme')?.value){
        localStorage.setItem('email',this.iniciar.get('email')?.value);
      }

      this.router.navigateByUrl('/platillos');
    },(err) => {
      Swal.fire({
        title: err.error.error.message,
        icon: 'error'
      })
    });

  }

}
