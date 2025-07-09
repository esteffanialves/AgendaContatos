import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContatoDetalhePage } from './contato-detalhe.page';

describe('ContatoDetalhePage', () => {
  let component: ContatoDetalhePage;
  let fixture: ComponentFixture<ContatoDetalhePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
