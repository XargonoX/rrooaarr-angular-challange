import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { MeasurementLineChartRoutingModule } from './measurement-line-chart-routing.module';
import { MeasurementLineChartComponent } from './measurement-line-chart.component';


@NgModule({
  declarations: [MeasurementLineChartComponent],
  imports: [
    CommonModule,
    MeasurementLineChartRoutingModule,
    ChartsModule
  ]
})
export class MeasurementLineChartModule { }
