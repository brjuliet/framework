import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoAlbunsComponent } from './novo-albuns.component';

describe('NovoAlbunsComponent', () => {
  let component: NovoAlbunsComponent;
  let fixture: ComponentFixture<NovoAlbunsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoAlbunsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoAlbunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
