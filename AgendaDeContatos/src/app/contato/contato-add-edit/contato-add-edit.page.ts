import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contato } from 'src/app/modelo/Contato.model';
import { ContatosService } from 'src/app/services/contatos.service';
import { ToastServiceService } from 'src/app/services/toast-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato-add-edit',
  templateUrl: './contato-add-edit.page.html',
  styleUrls: ['./contato-add-edit.page.scss'],
   standalone: false,
})
export class ContatoAddEditPage implements OnInit {
  contatoForm!: FormGroup;
  contato!: Contato;
  modoEdicao: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contatoService: ContatosService,
    private toastService: ToastServiceService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    // pega o id que passa na rota pelo snapshot 
    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    if (id > 0) {
      this.contato = this.contatoService.getById(id);
    } else {
      this.contato = { id, nome: '', telefone: '', email: '' };
      this.modoEdicao = true;
    }

    this.contatoForm = this.formBuilder.group({
      id: [this.contato?.id],
      nome: [this.contato?.nome, Validators.required],
      telefone: [this.contato?.telefone, Validators.required],
      email: [this.contato?.email, [Validators.required, Validators.email]],
    });
  }

  iniciarEdicao() {
    this.modoEdicao = true;
  }

  cancelarEdicao() {
    this.contatoForm.setValue(this.contato);
    this.modoEdicao = false;
  }

  submit() {
    const contatoAtualizado: Contato = this.contatoForm.value;
    this.contatoService.update(contatoAtualizado);
    this.toastService.presentToast('Contato salvo com sucesso!', 3000, 'bottom');
    this.router.navigateByUrl('/lista-contato');
    this.modoEdicao = false;
  }
}
