import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidermarqueComponent } from './validermarque.component';

describe('ValidermarqueComponent', () => {
  let component: ValidermarqueComponent;
  let fixture: ComponentFixture<ValidermarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidermarqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidermarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
