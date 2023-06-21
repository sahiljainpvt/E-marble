import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProductlistComponent } from './display-productlist.component';

describe('DisplayProductlistComponent', () => {
  let component: DisplayProductlistComponent;
  let fixture: ComponentFixture<DisplayProductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayProductlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayProductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
