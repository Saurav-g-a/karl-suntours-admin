import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHolidaySectionComponent } from './update-holiday-section.component';

describe('UpdateHolidaySectionComponent', () => {
  let component: UpdateHolidaySectionComponent;
  let fixture: ComponentFixture<UpdateHolidaySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHolidaySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHolidaySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
