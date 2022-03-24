import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationUpdateSectionComponent } from './destination-update-section.component';

describe('DestinationUpdateSectionComponent', () => {
  let component: DestinationUpdateSectionComponent;
  let fixture: ComponentFixture<DestinationUpdateSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationUpdateSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationUpdateSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
