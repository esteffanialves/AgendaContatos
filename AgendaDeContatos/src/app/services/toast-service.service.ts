import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastServiceService {

  constructor(private toastController: ToastController) {}

  async presentToast(mensagem: string, duracao: number = 3000, posicao: 'top' | 'middle' | 'bottom' = 'bottom') {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: duracao,
      position: posicao,
    });

    await toast.present();
  }
}
