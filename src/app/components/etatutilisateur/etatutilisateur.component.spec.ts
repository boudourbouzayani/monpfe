import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatutilisateurComponent } from './etatutilisateur.component';

describe('EtatutilisateurComponent', () => {
  let component: EtatutilisateurComponent;
  let fixture: ComponentFixture<EtatutilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtatutilisateurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtatutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
