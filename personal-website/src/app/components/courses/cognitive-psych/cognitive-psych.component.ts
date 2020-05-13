import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cognitive-psych',
  templateUrl: './cognitive-psych.component.html',
  styleUrls: ['./cognitive-psych.component.scss']
})
export class CognitivePsychComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/files/cognitivePsych.pdf');
    link.setAttribute('download', 'cognitivePsych.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  openFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/files/cognitivePsych.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
