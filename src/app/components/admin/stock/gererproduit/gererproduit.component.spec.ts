import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererproduitComponent } from './gererproduit.component';

describe('GererproduitComponent', () => {
  let component: GererproduitComponent;
  let fixture: ComponentFixture<GererproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GererproduitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GererproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
