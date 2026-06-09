import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminconcComponent } from './adminconc.component';

describe('AdminconcComponent', () => {
  let component: AdminconcComponent;
  let fixture: ComponentFixture<AdminconcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminconcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminconcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
