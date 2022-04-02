import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaySectionListComponent } from './holiday-section-list.component';

describe('HolidaySectionListComponent', () => {
  let component: HolidaySectionListComponent;
  let fixture: ComponentFixture<HolidaySectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidaySectionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidaySectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
