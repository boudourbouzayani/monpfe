import { TestBed } from '@angular/core/testing';

import { EtatutilisateurService } from './etatutilisateur.service';

describe('EtatutilisateurService', () => {
  let service: EtatutilisateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtatutilisateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
