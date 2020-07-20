import { Component, OnInit } from '@angular/core';
import {StateService} from "../../state.service";
import { Measurement } from 'src/models/measurement.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  tableData$ : Measurement[] = []
  
  columnsToDisplay = ['id', 'value', 'scientist', 'time']
  constructor(private state: StateService) { };

  ngOnInit(): void {
    this.state.currentMasurements$.subscribe(
      (data) => {
        console.log('tableData');
        console.log(this.tableData$);
        console.log('data');
        console.log(data);
        this.tableData$ = this.tableData$.concat(data)
        console.log('after');
        console.log(this.tableData$)
        console.log('--------------');
    });
  }

}
