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
    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    if (id > 0) {
      // edição
      this.contato = this.contatoService.getById(id);
    } else {
      // novo
      this.contato = { id: 0, nome: '', telefone: '', email: '', favorito: false };
      this.modoEdicao = true;
    }

    this.contatoForm = this.formBuilder.group({
      id: [this.contato.id],
      nome: [this.contato.nome, Validators.required],
      telefone: [
        this.contato.telefone,
        [
          Validators.required,
          Validators.pattern(/^\d{11}$/)
        ]
      ],
      email: [
        this.contato.email,
        [Validators.required, Validators.email]
  ]
});


  }

  // ativa o modo de edição se veio por ver
  iniciarEdicao() {
    this.modoEdicao = true;
  }

  cancelarEdicao() {
    this.contatoForm.setValue({
      id: this.contato.id,
      nome: this.contato.nome,
      telefone: this.contato.telefone,
      email: this.contato.email
    });
    this.modoEdicao = false;
  }

  // salva os dados editados
  submit() {
    const contatoAtualizado: Contato = {
      ...this.contatoForm.value,
      favorito: this.contato.favorito // mantém favorito
    };

    this.contatoService.update(contatoAtualizado);
    this.toastService.presentToast('Contato salvo com sucesso!', 3000, 'bottom');
    this.router.navigateByUrl('/lista-contato');
    this.modoEdicao = false;
  }
}
