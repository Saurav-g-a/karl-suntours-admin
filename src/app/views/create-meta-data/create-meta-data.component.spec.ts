import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMetaDataComponent } from './create-meta-data.component';

describe('CreateMetaDataComponent', () => {
  let component: CreateMetaDataComponent;
  let fixture: ComponentFixture<CreateMetaDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMetaDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMetaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
