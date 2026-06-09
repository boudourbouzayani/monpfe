import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierroleComponent } from './modifierrole.component';

describe('ModifierroleComponent', () => {
  let component: ModifierroleComponent;
  let fixture: ComponentFixture<ModifierroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierroleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
