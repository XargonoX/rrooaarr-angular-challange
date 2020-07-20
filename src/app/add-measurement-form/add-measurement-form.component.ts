import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { StateService } from '../state.service';
import { Measurement } from "../../models/measurement.interface";

class FormData implements Measurement {
  id: string;
  value: number;
  name: string;
  scientist: string;
  time: Date | string;
};

@Component({
  selector: 'app-add-measurement-form',
  templateUrl: './add-measurement-form.component.html',
  styleUrls: ['./add-measurement-form.component.scss']
})


export class AddMeasurementFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private state: StateService) {
    this.form = this.fb.group({
         "value": 0,
         "name": "",
         "scientist": "",
         "time": new Date()
         });
    }

  onSubmitForm() {
    const newDataPoint = new FormData();
    newDataPoint.id = "manually-added";
    newDataPoint.value =  this.form.value.value;
    newDataPoint.name = this.form.value.name;
    newDataPoint.scientist = this.form.value.scientist;
    newDataPoint.time = this.form.value.time;

    this.state.addMeasurement([newDataPoint]);
  }


  ngOnInit(): void {
  }

}
