import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeasurementLineChartComponent } from './measurement-line-chart.component';

const routes: Routes = [{ path: '', component: MeasurementLineChartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeasurementLineChartRoutingModule { }
