import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMeasurementFormComponent } from './add-measurement-form.component';

const routes: Routes = [{ path: '', component: AddMeasurementFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddMeasurementFormRoutingModule { }
