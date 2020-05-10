import {Component, OnChanges, OnInit} from '@angular/core';
import { PlanService } from '../../../services/plan/plan.service';
import {GridOptions, GridReadyEvent, ModelUpdatedEvent} from 'ag-grid-community';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit, OnChanges {

  data: any;
  columnDefs: any;
  showAddItem: boolean;
  content: string;
  priority: number;
  time: Date;
  gridOptions: GridOptions;

  constructor(private planService: PlanService) { }

  ngOnInit(): void {
    this.showAddItem = false;
    this.columnDefs = [
      {
        headerName: 'Priority',
        field: 'priority',
        sortable: true,
        filter: true,
        cellStyle: { textAlign: 'center' },
        width: 5
      },
      {
        headerName: 'Date',
        field: 'date',
        sortable: true,
        filter: true,
        cellStyle: { textAlign: 'center' },
        width: 5
      },
      {
        headerName: 'Content',
        field: 'content',
        sortable: true,
        filter: true,
        cellStyle: { textAlign: 'center' },
        width: 90
      }
    ];
    this.gridOptions = {
      onGridReady(event: GridReadyEvent): void {
        event.api.sizeColumnsToFit();
      },
      onModelUpdated(event: ModelUpdatedEvent): void {
        this.onModelUpdated(event);
      }
    } as GridOptions;
    this.data = [];
    // this.getPlan();
  }

  ngOnChanges() {
    console.log('hahah');
  }

  getPlan() {
    this.planService.getPlan('', '').subscribe( res => {
      this.data = res;
      console.log(res);
    });
  }

  updatePlan() {
    this.showAddItem = false;
    const requestBody = {
      content: this.content,
      priority: this.priority,
      time: this.time
    };
    this.planService.postPlan(requestBody).subscribe(res => {
      console.log(res);
    });
  }

  addPlan() {
    this.showAddItem = true;
  }

  deletePlan() {
    this.planService.deletePlan().subscribe( res => {
      console.log(res);
    });
  }

  clearPlan() {
    this.content = '';
    this.priority = null;
    this.time = null;
  }

  cancelPlan() {
    this.clearPlan();
    this.showAddItem = false;
  }

  resizeColumns(params = null) {
    if (params) {
      params.api.resetRowHeights();
      if (params.clientWidth > 678) {
        params.api.sizeColumnsToFit();
      }
    } else {
      this.gridOptions.api.sizeColumnsToFit();
    }
  }

}
