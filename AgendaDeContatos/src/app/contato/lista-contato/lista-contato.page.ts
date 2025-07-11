import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Contato } from 'src/app/modelo/Contato.model';
import { ContatosService } from 'src/app/services/contatos.service';
import { ToastServiceService } from 'src/app/services/toast-service.service';

@Component({
  selector: 'app-lista-contato',
  templateUrl: './lista-contato.page.html',
  styleUrls: ['./lista-contato.page.scss'],
  standalone: false,
  // tem que clocar o standalone em todos os arquivos.ts que criamos 
})

export class ListaContatoPage implements OnInit {

  //slidinglist -faz a lista arrastar e aparecer as opções
  @ViewChild('slidinglist') slidingList: IonList | undefined;

  public lista: Contato[] = []; // lista de contatos
  public apenasFavoritos = false; // controla exibição de favoritos

  //constrtutor -um método chamando quando a pagina é criada e chama dois serviços 
  constructor(
    private contatoService: ContatosService,
    private toastService: ToastServiceService
  ) {}

  ngOnInit() {
    this.carregarLista();
  }

  // uma função para carregar os contatos
  carregarLista() {
    this.lista = this.contatoService.getAll();
  }

  // uma função acionado quando clica para excluir contato
  async removerContato(contato: Contato) {
    this.contatoService.remove(contato);
    this.toastService.presentToast(
      'Contato removido com sucesso',
      3000,
      'bottom'
    );
    this.carregarLista(); // recarrega a lista após remover
    await this.slidingList?.closeSlidingItems();
  }

  // uma função acionada quando clica na estrela para favoritar
  favoritar(contato: Contato) {
    this.contatoService.toggleFavorito(contato);
    this.carregarLista(); // recarrega a lista após favoritar
  }

  // uma função para filtrar favoritos quando toggle está ativo
  get listaFiltrada(): Contato[] {
    return this.apenasFavoritos
      ? this.lista.filter(c => c.favorito)
      : this.lista;
  }
}
