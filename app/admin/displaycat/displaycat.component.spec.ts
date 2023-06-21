import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycatComponent } from './displaycat.component';

describe('DisplaycatComponent', () => {
  let component: DisplaycatComponent;
  let fixture: ComponentFixture<DisplaycatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaycatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaycatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
