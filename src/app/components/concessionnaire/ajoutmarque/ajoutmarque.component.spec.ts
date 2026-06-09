import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutmarqueComponent } from './ajoutmarque.component';

describe('AjoutmarqueComponent', () => {
  let component: AjoutmarqueComponent;
  let fixture: ComponentFixture<AjoutmarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutmarqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutmarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
