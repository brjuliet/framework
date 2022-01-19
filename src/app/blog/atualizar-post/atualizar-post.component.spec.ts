import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarPostComponent } from './atualizar-post.component';

describe('AtualizarPostComponent', () => {
  let component: AtualizarPostComponent;
  let fixture: ComponentFixture<AtualizarPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizarPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
