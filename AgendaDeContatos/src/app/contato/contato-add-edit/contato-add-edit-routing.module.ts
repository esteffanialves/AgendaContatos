import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContatoAddEditPage } from './contato-add-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ContatoAddEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContatoAddEditPageRoutingModule {}
