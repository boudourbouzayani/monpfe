import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerermarqueComponent } from './gerermarque.component';

describe('GerermarqueComponent', () => {
  let component: GerermarqueComponent;
  let fixture: ComponentFixture<GerermarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerermarqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerermarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
