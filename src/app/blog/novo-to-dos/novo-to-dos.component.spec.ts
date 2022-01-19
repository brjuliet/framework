import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoToDosComponent } from './novo-to-dos.component';

describe('NovoToDosComponent', () => {
  let component: NovoToDosComponent;
  let fixture: ComponentFixture<NovoToDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoToDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoToDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
