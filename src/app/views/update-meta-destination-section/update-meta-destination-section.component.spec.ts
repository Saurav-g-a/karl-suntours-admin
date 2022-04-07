import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMetaDestinationSectionComponent } from './update-meta-destination-section.component';

describe('UpdateMetaDestinationSectionComponent', () => {
  let component: UpdateMetaDestinationSectionComponent;
  let fixture: ComponentFixture<UpdateMetaDestinationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMetaDestinationSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMetaDestinationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
