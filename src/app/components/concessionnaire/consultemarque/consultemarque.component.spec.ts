import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultemarqueComponent } from './consultemarque.component';

describe('ConsultemarqueComponent', () => {
  let component: ConsultemarqueComponent;
  let fixture: ComponentFixture<ConsultemarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultemarqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultemarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
