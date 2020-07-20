import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMeasurementFormRoutingModule } from './add-measurement-form-routing.module';
import { AddMeasurementFormComponent } from './add-measurement-form.component';


@NgModule({
  declarations: [AddMeasurementFormComponent],
  imports: [
    CommonModule,
    AddMeasurementFormRoutingModule
  ]
})
export class AddMeasurementFormModule { }
