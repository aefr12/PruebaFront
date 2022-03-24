import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [`
    .example-container .mat-form-field + .mat-form-field {
      margin-left: 8px;
    }
  `]
})
export class RegisterComponent implements OnInit {

  recordarme = false;
  registro = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    name: ['', Validators.required],
    returnSecureToken: true
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  get emailInvalid(){
    return this.registro.get('email')?.invalid && this.registro.get('email')?.touched;
  }

  get passwordInvalid(){
    return this.registro.get('password')?.invalid && this.registro.get('password')?.touched;
  }

  get nameInvalid(){
    return this.registro.get('name')?.invalid && this.registro.get('name')?.touched;
  }

  ngOnInit(): void {
  }

  registrarme(){
    if(this.registro.invalid){
      return Object.values(this.registro.controls).forEach(control => {
        control.markAsTouched();
      });
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });

    Swal.showLoading();

    this.authService.register(this.registro.value).subscribe(async (resp:any) =>{
      Swal.close();
      this.router.navigateByUrl('/platillos');
    },(err) =>{
      Swal.fire({
        title: err.error.error.message,
        icon: 'error'
      });
    })

  }

}
