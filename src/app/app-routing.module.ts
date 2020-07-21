import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RootComponent} from "./datatable/root-component/root.component";
import {DatatableModule} from "./datatable/datatable.module";


const routes: Routes = [
  {
    path: '',
    component: RootComponent
  },
  { path: 'addMeasurementPage', loadChildren: () => import('./add-measurement-form/add-measurement-form.module').then(m => m.AddMeasurementFormModule) },
  { path: 'showMeasurementChart', loadChildren: () => import('./measurement-line-chart/measurement-line-chart.module').then(m => m.MeasurementLineChartModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DatatableModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
