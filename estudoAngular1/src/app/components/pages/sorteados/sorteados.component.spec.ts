import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteadosComponent } from './sorteados.component';

describe('SorteadosComponent', () => {
  let component: SorteadosComponent;
  let fixture: ComponentFixture<SorteadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorteadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorteadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
