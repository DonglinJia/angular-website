import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface WorkPopupData {
  name: string;
  duration: string;
  location: string;
  jobResponsibility: Array<string>;
  companyURL: string;
}

@Component({
  selector: 'app-work-pop-up',
  templateUrl: './work-pop-up.component.html',
  styleUrls: ['./work-pop-up.component.scss']
})
export class WorkPopUpComponent implements OnInit {

  constructor(public workpopup: MatDialogRef<WorkPopUpComponent>,
              @Inject(MAT_DIALOG_DATA) public data: WorkPopupData) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.workpopup.close();
  }
}
