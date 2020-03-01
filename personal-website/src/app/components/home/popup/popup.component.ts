import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface PopupData {
  name: string;
  duration: string;
  dangerousLevel: string;
  preparation: string;
  speed: string;
  model: string;
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})

export class PopupComponent implements OnInit {

  constructor(public popup: MatDialogRef<PopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: PopupData) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.popup.close();
  }

}
