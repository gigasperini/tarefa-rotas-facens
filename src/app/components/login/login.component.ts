import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  usuario = '';
  senha = '';
  mensagemError = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.usuario === 'admin' && this.senha === '123') {
      this.router.navigate(['/home', this.usuario]);
    } else {
      this.mensagemError = 'Usuário ou senha inválido';
    }
  }



}
