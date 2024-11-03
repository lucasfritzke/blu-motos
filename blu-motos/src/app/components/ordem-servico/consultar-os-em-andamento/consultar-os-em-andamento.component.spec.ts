import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarOsEmAndamentoComponent } from './consultar-os-em-andamento.component';

describe('ConsultarOsEmAndamentoComponent', () => {
  let component: ConsultarOsEmAndamentoComponent;
  let fixture: ComponentFixture<ConsultarOsEmAndamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarOsEmAndamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarOsEmAndamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
