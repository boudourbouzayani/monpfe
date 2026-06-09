import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterproduitComponent } from './consulterproduit.component';

describe('ConsulterproduitComponent', () => {
  let component: ConsulterproduitComponent;
  let fixture: ComponentFixture<ConsulterproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsulterproduitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsulterproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
