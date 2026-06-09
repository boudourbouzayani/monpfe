import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterdemandeComponent } from './consulterdemande.component';

describe('ConsulterdemandeComponent', () => {
  let component: ConsulterdemandeComponent;
  let fixture: ComponentFixture<ConsulterdemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsulterdemandeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsulterdemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
