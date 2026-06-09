import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerutilisateurComponent } from './supprimerutilisateur.component';

describe('SupprimerutilisateurComponent', () => {
  let component: SupprimerutilisateurComponent;
  let fixture: ComponentFixture<SupprimerutilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupprimerutilisateurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupprimerutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
