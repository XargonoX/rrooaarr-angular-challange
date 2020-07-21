import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementLineChartComponent } from './measurement-line-chart.component';

describe('MeasurementLineChartComponent', () => {
  let component: MeasurementLineChartComponent;
  let fixture: ComponentFixture<MeasurementLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasurementLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
