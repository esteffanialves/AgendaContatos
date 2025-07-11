import { Injectable } from '@angular/core';
import { Contato } from '../modelo/Contato.model';
// importei a estrutura/modelo da minha classe Contato

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  //Criação de uma lista manualmente para já aparecer na minha tela 
  private lista: Contato[] = [
    { id: 1, nome: 'João Silva', telefone: '123456789', email: 'joao@email.com', favorito: false },
    { id: 2, nome: 'Maria Oliveira', telefone: '987654321', email: 'maria@email.com', favorito: false },
    { id: 3, nome: 'Ana Souza', telefone: '456123789', email: 'ana@email.com', favorito: false }
  ];

  constructor() {}

  // metodo qu retorna todos contatos da lista 
  getAll() {
    return this.lista;
  }

  //metodo que retorna o contato selecionado com base no id
  getById(id: number) {
    const contatoSelecionado = this.lista.filter(
      contato => contato.id === id
    );
    return contatoSelecionado[0];
  }

  //metodo para excluir um contato
  remove(contato: Contato) {
    this.lista.splice(
      this.getElementOfIndex(contato.id), 1
    );
  }

  private getElementOfIndex(id: number) {
    return this.lista.indexOf(this.getById(id));
  }

  //metodo para atualizar ou criar novo contato
  update(contato: Contato) {
    //atualizar contato
    if (contato.id > 0) {
      this.lista[this.getElementOfIndex(contato.id)] = contato;

    // criar contato
    } else {
      contato.id = this.lista[this.lista.length - 1].id + 1;
      // se o campo favorito não vier do formulário, definimos como false por padrão
      contato.favorito = false;
      this.lista.push(contato);
    }
  }

  // favoritar contato 
  toggleFavorito(contato: Contato) {
    const index = this.lista.findIndex(c => c.id === contato.id);
    if (index !== -1) {
      this.lista[index].favorito = !this.lista[index].favorito;
    }
  }
}
