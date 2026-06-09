import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutermarqueComponent } from './ajoutermarque.component';

describe('AjoutermarqueComponent', () => {
  let component: AjoutermarqueComponent;
  let fixture: ComponentFixture<AjoutermarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutermarqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutermarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
