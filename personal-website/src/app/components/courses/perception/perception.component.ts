import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perception',
  templateUrl: './perception.component.html',
  styleUrls: ['./perception.component.scss']
})
export class PerceptionComponent implements OnInit {

  private prefix: string;

  constructor() { }


  ngOnInit(): void {
    this.prefix = 'assets/files/';
  }

  downloadFile(fileName) {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    if (fileName === 'intro') {
      link.setAttribute('href', this.prefix + 'perception.pdf');
      link.setAttribute('download', 'perception.pdf');
    }
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  openFile(fileName) {
    const link = document.createElement('a');
    if (fileName === 'intro') {
      link.setAttribute('target', '_blank');
      link.setAttribute('href', this.prefix + 'perception.pdf');
    }
    document.body.appendChild(link);
    link.click();
    link.remove();
  }


}
