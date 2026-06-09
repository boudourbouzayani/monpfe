import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderproduitComponent } from './validerproduit.component';

describe('ValiderproduitComponent', () => {
  let component: ValiderproduitComponent;
  let fixture: ComponentFixture<ValiderproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValiderproduitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValiderproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
