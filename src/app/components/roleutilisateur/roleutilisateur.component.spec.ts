import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleutilisateurComponent } from './roleutilisateur.component';

describe('RoleutilisateurComponent', () => {
  let component: RoleutilisateurComponent;
  let fixture: ComponentFixture<RoleutilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleutilisateurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoleutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
