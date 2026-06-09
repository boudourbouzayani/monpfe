import { TestBed } from '@angular/core/testing';

import { RoleutilisateurService } from './roleutilisateur.service';

describe('RoleutilisateurService', () => {
  let service: RoleutilisateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleutilisateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
