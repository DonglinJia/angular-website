import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-positive-psych',
  templateUrl: './positive-psych.component.html',
  styleUrls: ['./positive-psych.component.scss']
})
export class PositivePsychComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/files/positivepsych.pdf');
    link.setAttribute('download', 'AI.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  openFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/files/positivepsych.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
