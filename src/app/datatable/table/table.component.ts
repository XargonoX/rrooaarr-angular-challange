import { Component, OnInit } from '@angular/core';
import {StateService} from "../../state.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  tableData$ = this.state.currentMasurements$
  columnsToDisplay = ['id', 'value', 'scientist', 'time']
  
  constructor(private state: StateService) { };
  ngOnInit(): void {
  }

}
