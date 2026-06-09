import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultermarqueComponent } from './consultermarque.component';

describe('ConsultermarqueComponent', () => {
  let component: ConsultermarqueComponent;
  let fixture: ComponentFixture<ConsultermarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultermarqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultermarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
