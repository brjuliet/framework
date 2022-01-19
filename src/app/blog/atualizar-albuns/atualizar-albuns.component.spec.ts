import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarAlbunsComponent } from './atualizar-albuns.component';

describe('AtualizarAlbunsComponent', () => {
  let component: AtualizarAlbunsComponent;
  let fixture: ComponentFixture<AtualizarAlbunsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizarAlbunsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarAlbunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
