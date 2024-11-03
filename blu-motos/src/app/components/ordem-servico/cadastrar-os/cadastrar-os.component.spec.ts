import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarOsComponent } from './cadastrar-os.component';

describe('CadastrarOsComponent', () => {
  let component: CadastrarOsComponent;
  let fixture: ComponentFixture<CadastrarOsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarOsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
