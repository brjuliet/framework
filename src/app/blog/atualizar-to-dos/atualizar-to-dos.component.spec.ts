import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarToDosComponent } from './atualizar-to-dos.component';

describe('AtualizarToDosComponent', () => {
  let component: AtualizarToDosComponent;
  let fixture: ComponentFixture<AtualizarToDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizarToDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarToDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
