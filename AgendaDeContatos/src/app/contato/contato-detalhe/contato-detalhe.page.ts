import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contato } from 'src/app/modelo/Contato.model';
import { ContatosService } from 'src/app/services/contatos.service';

@Component({
  selector: 'app-contato-detalhe',
  templateUrl: './contato-detalhe.page.html',
  styleUrls: ['./contato-detalhe.page.scss'],
  standalone: false
})
export class ContatoDetalhePage implements OnInit {
  contato!: Contato;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contatoService: ContatosService
  ) {}

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.contato = this.contatoService.getById(id);
  }
}
