import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHolidaySectionComponent } from './create-holiday-section.component';

describe('CreateHolidaySectionComponent', () => {
  let component: CreateHolidaySectionComponent;
  let fixture: ComponentFixture<CreateHolidaySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHolidaySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHolidaySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
