import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarbledetailsComponent } from './marbledetails.component';

describe('MarbledetailsComponent', () => {
  let component: MarbledetailsComponent;
  let fixture: ComponentFixture<MarbledetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarbledetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarbledetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
