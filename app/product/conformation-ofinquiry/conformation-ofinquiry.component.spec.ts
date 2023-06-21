import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformationOfinquiryComponent } from './conformation-ofinquiry.component';

describe('ConformationOfinquiryComponent', () => {
  let component: ConformationOfinquiryComponent;
  let fixture: ComponentFixture<ConformationOfinquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConformationOfinquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConformationOfinquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
