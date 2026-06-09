import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulteradminComponent } from './consulteradmin.component';

describe('ConsulteradminComponent', () => {
  let component: ConsulteradminComponent;
  let fixture: ComponentFixture<ConsulteradminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsulteradminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsulteradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
