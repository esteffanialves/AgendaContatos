import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContatoAddEditPageRoutingModule } from './contato-add-edit-routing.module';

import { ContatoAddEditPage } from './contato-add-edit.page';

import { ReactiveFormsModule } from '@angular/forms';
// importar oreactive Forms para utilizar o Form Group 


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContatoAddEditPageRoutingModule,
     ReactiveFormsModule
  
    
  ],
  declarations: [ContatoAddEditPage]
})
export class ContatoAddEditPageModule {}
