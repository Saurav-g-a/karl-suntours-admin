import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDestinationSectionComponent } from './update-destination-section.component';

describe('UpdateDestinationSectionComponent', () => {
  let component: UpdateDestinationSectionComponent;
  let fixture: ComponentFixture<UpdateDestinationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDestinationSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDestinationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
