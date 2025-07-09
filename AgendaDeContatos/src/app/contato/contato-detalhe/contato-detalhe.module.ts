import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContatoDetalhePageRoutingModule } from './contato-detalhe-routing.module';

import { ContatoDetalhePage } from './contato-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContatoDetalhePageRoutingModule
  ],
  declarations: [ContatoDetalhePage]
})
export class ContatoDetalhePageModule {}
