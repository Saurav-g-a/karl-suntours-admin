import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHomepageSectionComponent } from './update-homepage-section.component';

describe('UpdateHomepageSectionComponent', () => {
  let component: UpdateHomepageSectionComponent;
  let fixture: ComponentFixture<UpdateHomepageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHomepageSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHomepageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
