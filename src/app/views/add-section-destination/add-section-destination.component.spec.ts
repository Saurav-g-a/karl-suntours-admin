import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectionDestinationComponent } from './add-section-destination.component';

describe('AddSectionDestinationComponent', () => {
  let component: AddSectionDestinationComponent;
  let fixture: ComponentFixture<AddSectionDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSectionDestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSectionDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
