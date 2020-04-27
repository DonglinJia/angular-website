import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ielts',
  templateUrl: './ielts.component.html',
  styleUrls: ['./ielts.component.scss']
})
export class IELTSComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/files/IELTS.pdf');
    link.setAttribute('download', 'IELTS.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  openFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/files/IELTS.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
