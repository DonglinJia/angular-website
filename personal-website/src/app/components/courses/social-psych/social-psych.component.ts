import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-psych',
  templateUrl: './social-psych.component.html',
  styleUrls: ['./social-psych.component.scss']
})
export class SocialPsychComponent implements OnInit {

  private prefix: string;

  constructor() { }

  ngOnInit(): void {
    this.prefix = 'assets/files/social-psychology/';
  }

  downloadFile(fileName) {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    if (fileName === 'methodology') {
      link.setAttribute('href', this.prefix + 'methodology.pdf');
      link.setAttribute('download', 'methodology.pdf');
    } else if (fileName === 'self-concept') {
      link.setAttribute('href', this.prefix + 'self-concept.pdf');
      link.setAttribute('download', 'self-concept.pdf');
    } else if (fileName === 'self-regulation') {
      link.setAttribute('href', this.prefix + 'self-regulation.pdf');
      link.setAttribute('download', 'self-regulation.pdf');
    } else if (fileName === 'relationship') {
      link.setAttribute('href', this.prefix + 'relationship.pdf');
      link.setAttribute('download', 'relationship.pdf');
    } else if (fileName === 'conformity') {
      link.setAttribute('href', this.prefix + 'conformity.pdf');
      link.setAttribute('download', 'conformity.pdf');
    } else if (fileName === 'attitude') {
      link.setAttribute('href', this.prefix + 'attitude.pdf');
      link.setAttribute('download', 'attitude.pdf');
    } else if (fileName === 'first-impression') {
      link.setAttribute('href', this.prefix + 'first-impression.pdf');
      link.setAttribute('download', 'first-impression.pdf');
    } else if (fileName === 'group') {
      link.setAttribute('href', this.prefix + 'group.pdf');
      link.setAttribute('download', 'group.pdf');
    } else if (fileName === 'prejudice') {
      link.setAttribute('href', this.prefix + 'prejudice.pdf');
      link.setAttribute('download', 'prejudice.pdf');
    } else if (fileName === 'prosocial-behavior') {
      link.setAttribute('href', this.prefix + 'prosocial-behavior.pdf');
      link.setAttribute('download', 'prosocial-behavior.pdf');
    }
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  openFile(fileName) {
    const link = document.createElement('a');
    if (fileName === 'methodology') {
      link.setAttribute('target', '_blank');
      link.setAttribute('href', this.prefix + 'methodology.pdf');
    } else if (fileName === 'self-concept') {
      link.setAttribute('target', '_blank');
      link.setAttribute('href', this.prefix + 'self-concept.pdf');
    } else if (fileName === 'self-regulation') {
      link.setAttribute('target', '_blank');
      link.setAttribute('href', this.prefix + 'self-regulation.pdf');
    } else if (fileName === 'relationship') {
      link.setAttribute('target', '_blank');
      link.setAttribute('href', this.prefix + 'relationship.pdf');
    } else if (fileName === 'conformity') {
      link.setAttribute('target', '_blank');
      link.setAttribute('href', this.prefix + 'conformity.pdf');
    } else if (fileName === 'attitude') {
      link.setAttribute('target', '_blank');
      link.setAttribute('href', this.prefix + 'attitude.pdf');
    } else if (fileName === 'first-impression') {
      link.setAttribute('target', '_blank');
      link.setAttribute('href', this.prefix + 'first-impression.pdf');
    } else if (fileName === 'group') {
      link.setAttribute('target', '_blank');
      link.setAttribute('href', this.prefix + 'group.pdf');
    } else if (fileName === 'prejudice') {
      link.setAttribute('target', '_blank');
      link.setAttribute('href', this.prefix + 'prejudice.pdf');
    } else if (fileName === 'prosocial-behavior') {
      link.setAttribute('target', '_blank');
      link.setAttribute('href', this.prefix + 'prosocial-behavior.pdf');
    }
    document.body.appendChild(link);
    link.click();
    link.remove();
  }


}
