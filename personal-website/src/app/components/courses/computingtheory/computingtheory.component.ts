import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computingtheory',
  templateUrl: './computingtheory.component.html',
  styleUrls: ['./computingtheory.component.scss']
})
export class ComputingtheoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/files/Computing.pdf');
    link.setAttribute('download', 'Computing.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  openFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/files/Computing.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
