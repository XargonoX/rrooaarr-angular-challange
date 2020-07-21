import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { StateService } from '../state.service';
import { Measurement } from 'src/models/measurement.interface';

@Component({
  selector: 'app-measurement-line-chart',
  templateUrl: './measurement-line-chart.component.html',
  styleUrls: ['./measurement-line-chart.component.scss']
})
export class MeasurementLineChartComponent implements OnInit {

  lineChartData: ChartDataSets[] = [
    { data: [], label: 'Measurements' },
  ];

  lineChartLabels: Label[] = [];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(private state: StateService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.state.currentMasurements$.subscribe(
      (data) => {
        this.lineChartData[0].data = []
        this.lineChartLabels = []
        var allDataPoints = this.state.currentMasurements$.getValue()
        allDataPoints = allDataPoints.sort((a: Measurement, b: Measurement) => {
          if (typeof a.time === 'string'){
            a.time = new Date(a.time);
          }
          if (typeof b.time === 'string'){
            b.time = new Date(b.time);
          }
          return a.time.getTime() - b.time.getTime();
      
      });
      allDataPoints.forEach(element => {
          this.lineChartData[0].data.push(element.value)
          if (typeof element.time === 'string'){
            this.lineChartLabels.push(element.time);
          }
          else {
            this.lineChartLabels.push(this.datepipe.transform(element.time));
          }
          
        });
      }
    )
  }

}
