import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandedevisComponent } from './demandedevis.component';

describe('DemandedevisComponent', () => {
  let component: DemandedevisComponent;
  let fixture: ComponentFixture<DemandedevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandedevisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandedevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
