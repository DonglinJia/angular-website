import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tensorflow',
  templateUrl: './tensorflow.component.html',
  styleUrls: ['./tensorflow.component.scss']
})
export class TensorflowComponent implements OnInit {

  public imageURL;
  constructor() { }

  ngOnInit(): void {
    this.imageURL = 'assets/img/tensorflow.png';
  }

  downloadFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/files/tensorflow.pdf');
    link.setAttribute('download', 'intro.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  openFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/files/tensorflow.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
