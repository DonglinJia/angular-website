import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cognitive-psych',
  templateUrl: './cognitive-psych.component.html',
  styleUrls: ['./cognitive-psych.component.scss']
})
export class CognitivePsychComponent implements OnInit {

  private prefix: string;

  constructor() { }


  ngOnInit(): void {
    this.prefix = 'assets/files/';
  }

  downloadFile(fileName) {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    if (fileName === 'intro') {
      link.setAttribute('href', this.prefix + 'cognitivePsych.pdf');
      link.setAttribute('download', 'cognitivePsych.pdf');
    } else if (fileName === 'attention') {
      link.setAttribute('href', this.prefix + 'attention.pdf');
      link.setAttribute('download', 'attention.pdf');
    } else if (fileName === 'brain') {
      link.setAttribute('href', this.prefix + 'brain.pdf');
      link.setAttribute('download', 'brain.pdf');
    } else if (fileName === 'decision') {
      link.setAttribute('href', this.prefix + 'decision.pdf');
      link.setAttribute('download', 'decision.pdf');
    } else if (fileName === 'language') {
      link.setAttribute('href', this.prefix + 'language.pdf');
      link.setAttribute('download', 'language.pdf');
    } else if (fileName === 'memory-processing') {
      link.setAttribute('href', this.prefix + 'memory.pdf');
      link.setAttribute('download', 'memory.pdf');
    }
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  openFile(fileName) {
    const link = document.createElement('a');
    if (fileName === 'intro') {
      link.setAttribute('target', '_blank');
      link.setAttribute('href', this.prefix + 'cognitivePsych.pdf');
    } else if (fileName === 'attention') {
      link.setAttribute('target', '_blank');
      link.setAttribute('href', this.prefix + 'attention.pdf');
    } else if (fileName === 'brain') {
      link.setAttribute('target', '_blank');
      link.setAttribute('href', this.prefix + 'brain.pdf');
    } else if (fileName === 'decision') {
      link.setAttribute('target', '_blank');
      link.setAttribute('href', this.prefix + 'decision.pdf');
    } else if (fileName === 'language') {
      link.setAttribute('target', '_blank');
      link.setAttribute('href', this.prefix + 'language.pdf');
    } else if (fileName === 'memory-processing') {
      link.setAttribute('target', '_blank');
      link.setAttribute('href', this.prefix + 'memory.pdf');
    }
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
