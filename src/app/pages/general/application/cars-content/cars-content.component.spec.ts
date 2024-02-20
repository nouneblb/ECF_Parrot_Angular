import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsContentComponent } from './cars-content.component';

describe('CarsContentComponent', () => {
  let component: CarsContentComponent;
  let fixture: ComponentFixture<CarsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarsContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
