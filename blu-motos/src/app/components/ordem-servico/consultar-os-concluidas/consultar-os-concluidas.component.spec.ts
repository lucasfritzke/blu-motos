import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarOsConcluidasComponent } from './consultar-os-concluidas.component';

describe('ConsultarOsConcluidasComponent', () => {
  let component: ConsultarOsConcluidasComponent;
  let fixture: ComponentFixture<ConsultarOsConcluidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarOsConcluidasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarOsConcluidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
