import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContatoAddEditPageRoutingModule } from './contato-add-edit-routing.module';

import { ContatoAddEditPage } from './contato-add-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContatoAddEditPageRoutingModule
  ],
  declarations: [ContatoAddEditPage]
})
export class ContatoAddEditPageModule {}
