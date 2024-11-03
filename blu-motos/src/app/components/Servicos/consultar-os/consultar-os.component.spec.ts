import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarOsComponent } from './consultar-os.component';

describe('ConsultarOsComponent', () => {
  let component: ConsultarOsComponent;
  let fixture: ComponentFixture<ConsultarOsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarOsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
