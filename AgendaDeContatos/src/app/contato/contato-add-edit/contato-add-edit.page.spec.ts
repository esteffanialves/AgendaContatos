import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContatoAddEditPage } from './contato-add-edit.page';

describe('ContatoAddEditPage', () => {
  let component: ContatoAddEditPage;
  let fixture: ComponentFixture<ContatoAddEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoAddEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
