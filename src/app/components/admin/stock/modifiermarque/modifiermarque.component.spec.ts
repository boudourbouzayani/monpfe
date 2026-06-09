import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiermarqueComponent } from './modifiermarque.component';

describe('ModifiermarqueComponent', () => {
  let component: ModifiermarqueComponent;
  let fixture: ComponentFixture<ModifiermarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifiermarqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifiermarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
