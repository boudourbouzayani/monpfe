import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitmarqueComponent } from './produitmarque.component';

describe('ProduitmarqueComponent', () => {
  let component: ProduitmarqueComponent;
  let fixture: ComponentFixture<ProduitmarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitmarqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProduitmarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
