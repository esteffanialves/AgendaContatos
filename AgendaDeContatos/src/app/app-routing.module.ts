import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lista-contato',
    loadChildren: () => import('./contato/lista-contato/lista-contato.module').then( m => m.ListaContatoPageModule)
  },
  {
    path: 'contato-add-edit',
    loadChildren: () => import('./contato/contato-add-edit/contato-add-edit.module').then( m => m.ContatoAddEditPageModule)
  },
  {
    path: 'contato-detalhe',
    loadChildren: () => import('./contato/contato-detalhe/contato-detalhe.module').then( m => m.ContatoDetalhePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
