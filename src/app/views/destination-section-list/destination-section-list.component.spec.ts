import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationSectionListComponent } from './destination-section-list.component';

describe('DestinationSectionListComponent', () => {
  let component: DestinationSectionListComponent;
  let fixture: ComponentFixture<DestinationSectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationSectionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationSectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
