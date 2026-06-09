import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterroleComponent } from './ajouterrole.component';

describe('AjouterroleComponent', () => {
  let component: AjouterroleComponent;
  let fixture: ComponentFixture<AjouterroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterroleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
