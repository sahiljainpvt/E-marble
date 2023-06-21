import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayapplicationComponent } from './displayapplication.component';

describe('DisplayapplicationComponent', () => {
  let component: DisplayapplicationComponent;
  let fixture: ComponentFixture<DisplayapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayapplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
