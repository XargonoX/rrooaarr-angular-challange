import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RootComponent} from "./datatable/root-component/root.component";
import {DatatableModule} from "./datatable/datatable.module";


const routes: Routes = [
  {
    path: '',
    component: RootComponent
  },
  { path: 'addMeasurementPage', loadChildren: () => import('./add-measurement-form/add-measurement-form.module').then(m => m.AddMeasurementFormModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DatatableModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
