import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {
  usuario = { nome: '', senha: '', confirmacaoSenha: '' };
  mensagemSucesso = '';

  onSubmit() {
    this.mensagemSucesso = `Usuário cadastrado com sucesso!`;
  }
}
