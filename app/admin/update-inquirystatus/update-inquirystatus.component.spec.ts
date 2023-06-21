import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInquirystatusComponent } from './update-inquirystatus.component';

describe('UpdateInquirystatusComponent', () => {
  let component: UpdateInquirystatusComponent;
  let fixture: ComponentFixture<UpdateInquirystatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInquirystatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateInquirystatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
