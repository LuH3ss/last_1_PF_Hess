import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLaumnosComponent } from './lista-laumnos.component';

describe('ListaLaumnosComponent', () => {
  let component: ListaLaumnosComponent;
  let fixture: ComponentFixture<ListaLaumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaLaumnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLaumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
