import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.scss']
})
export class AIComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/files/AI.pdf');
    link.setAttribute('download', 'AI.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  openFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/files/AI.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
