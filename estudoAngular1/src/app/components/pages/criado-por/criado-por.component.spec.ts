import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriadoPorComponent } from './criado-por.component';

describe('CriadoPorComponent', () => {
  let component: CriadoPorComponent;
  let fixture: ComponentFixture<CriadoPorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriadoPorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriadoPorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
