import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMeasurementFormComponent } from './add-measurement-form.component';

describe('AddMeasurementFormComponent', () => {
  let component: AddMeasurementFormComponent;
  let fixture: ComponentFixture<AddMeasurementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMeasurementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMeasurementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
