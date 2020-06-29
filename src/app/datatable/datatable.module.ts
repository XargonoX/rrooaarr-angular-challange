import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root-component/root.component';
import {MatCardModule} from "@angular/material/card";
import { TableComponent } from './table/table.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";



@NgModule({
  declarations: [RootComponent, TableComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
  ],
  exports: [RootComponent]
})
export class DatatableModule { }
