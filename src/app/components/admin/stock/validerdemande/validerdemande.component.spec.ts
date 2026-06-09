import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderdemandeComponent } from './validerdemande.component';

describe('ValiderdemandeComponent', () => {
  let component: ValiderdemandeComponent;
  let fixture: ComponentFixture<ValiderdemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValiderdemandeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValiderdemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
