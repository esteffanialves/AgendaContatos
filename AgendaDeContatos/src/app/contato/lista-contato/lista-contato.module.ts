import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaContatoPageRoutingModule } from './lista-contato-routing.module';

import { ListaContatoPage } from './lista-contato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaContatoPageRoutingModule
  ],
  declarations: [ListaContatoPage]
})
export class ListaContatoPageModule {}
