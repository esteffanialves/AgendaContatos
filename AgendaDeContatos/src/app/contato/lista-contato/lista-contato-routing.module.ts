import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaContatoPage } from './lista-contato.page';

const routes: Routes = [
  {
    path: '',
    component: ListaContatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaContatoPageRoutingModule {}
