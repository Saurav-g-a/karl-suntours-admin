import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDestinationSectionComponent } from './create-destination-section.component';

describe('CreateDestinationSectionComponent', () => {
  let component: CreateDestinationSectionComponent;
  let fixture: ComponentFixture<CreateDestinationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDestinationSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDestinationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
