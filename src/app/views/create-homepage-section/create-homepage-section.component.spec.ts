import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHomepageSectionComponent } from './create-homepage-section.component';

describe('CreateHomepageSectionComponent', () => {
  let component: CreateHomepageSectionComponent;
  let fixture: ComponentFixture<CreateHomepageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHomepageSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHomepageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
