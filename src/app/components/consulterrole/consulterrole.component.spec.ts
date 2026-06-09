import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterroleComponent } from './consulterrole.component';

describe('ConsulterroleComponent', () => {
  let component: ConsulterroleComponent;
  let fixture: ComponentFixture<ConsulterroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsulterroleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsulterroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
