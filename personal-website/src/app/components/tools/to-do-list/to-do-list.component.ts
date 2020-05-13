import {Component, OnInit} from '@angular/core';
import { PlanService } from '../../../services/plan/plan.service';
import {GridApi, GridOptions, GridReadyEvent, ModelUpdatedEvent} from 'ag-grid-community';
import {Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  public data: Array<any>;
  public columnDefs: any;
  public showAddItem: boolean;
  public showDeleteItem: boolean;
  public content: string;
  public priority: number;
  public time: string;
  public deleteId: number;
  public gridOptions: GridOptions;
  public selectDate: string;
  public currentDate: string;
  public previousData: any;
  public durationInSeconds = 5;
  public message: string;


  constructor(private planService: PlanService, private messageBox: MatSnackBar) {
    this.currentDate = new Date().toISOString().split('T')[0];
    this.previousData = new Array();
  }

  ngOnInit(): void {
    this.showAddItem = false;
    this.showDeleteItem = false;
    this.selectDate = new Date().toISOString().split('T')[0];
    this.time = this.selectDate;
    this.columnDefs = [
      {
        headerName: 'Id',
        field: 'id',
        sortable: true,
        filter: true,
        cellStyle: { textAlign: 'center' },
        width: 2
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
        headerName: 'Priority',
        field: 'priority',
        sortable: true,
        filter: true,
        cellStyle: { textAlign: 'center' },
        width: 3
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
      rowHeight: 30,
      onGridReady(event: GridReadyEvent): void {
        event.api.sizeColumnsToFit();
      }
    } as GridOptions;
    this.getPlan();
    this.getPreviousPlan();
  }

  getPlan() {
    this.planService.getPlan('', this.selectDate).subscribe( res => {
      this.data = res;
      this.showAddItem = false;
      this.showDeleteItem = false;
    });
  }

  updatePlan() {
    const requestBody = {
      content: this.content,
      priority: this.priority,
      time: this.time
    };
    if (this.time >= this.currentDate) {
      this.showAddItem = false;
      this.planService.postPlan(requestBody).subscribe(res => {
        this.getPlan();
        this.getPreviousPlan();
      });
    } else {
      this.time = this.currentDate;
      this.planService.changeMessage('Do NOT make a past plan! Focus on present and enjoy today!');
      this.messageBox.openFromComponent(PopMessageComponent, {
        duration: this.durationInSeconds * 1000,
      });
    }
  }

  addPlan() {
    this.showAddItem = true;
  }

  checkValid(checkId: number): boolean {
    for (const item of this.data) {
      if (item.id === checkId) {
        return true;
      }
    }
    return false;
  }

  deleteItem() {
    if (this.checkValid(this.deleteId)) {
      this.planService.deletePlan(this.deleteId).subscribe( res => {
        this.showDeleteItem = false;
        this.getPlan();
        this.getPreviousPlan();
      });
    } else {
      this.planService.changeMessage('Item id: ' + this.deleteId + ' does not exist.');
      this.messageBox.openFromComponent(PopMessageComponent, {
        duration: this.durationInSeconds * 1000,
      });
      this.deleteId = null;
    }
  }

  deletePlan() {
    if (this.data !== null) {
      this.showDeleteItem = true;
    }
  }

  getPreviousPlan() {
    this.planService.getPlan('', '').subscribe( res => {
      res.forEach( item => {
        if (item.date !== this.currentDate) {
          this.previousData.push(item);
        }
      });
    });
  }

  showPreviousPlan() {
    this.planService.getPlan('', this.selectDate).subscribe( res => {
      this.data = this.previousData;
    });
  }

  deletePreviousPlan() {
    const idList = new Array();
    for (const item of this.previousData) {
      idList.push(item.id);
    }
    if (idList.length > 0) {
      for (const id of idList) {
        this.planService.deletePlan(id).subscribe(res => {
          console.log('Item with id: ' + id + ' has been deleted!');
        });
      }
    }
    this.getPlan();
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

@Component({
  selector: 'app-message-box',
  templateUrl: 'messageBox.html',
  styles: [`
    .message-box {
      color: white;
    }
  `],
})
export class PopMessageComponent implements OnInit{
  public message: string;

  constructor(private planService: PlanService) {}

  ngOnInit() {
    this.planService.currentMessage.subscribe(message => this.message = message);
  }
}
