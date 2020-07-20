import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddMeasurementFormRoutingModule } from './add-measurement-form-routing.module';
import { AddMeasurementFormComponent } from './add-measurement-form.component';


@NgModule({
  declarations: [AddMeasurementFormComponent],
  imports: [
    CommonModule,
    AddMeasurementFormRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddMeasurementFormModule { }
