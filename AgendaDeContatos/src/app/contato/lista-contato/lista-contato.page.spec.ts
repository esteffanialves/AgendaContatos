import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaContatoPage } from './lista-contato.page';

describe('ListaContatoPage', () => {
  let component: ListaContatoPage;
  let fixture: ComponentFixture<ListaContatoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaContatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
