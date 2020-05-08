import { Component, OnInit } from '@angular/core';
import {UtilityService} from '../../../services/utility.service';

export interface Algorithm {
  title: string;
  intro: string;
  url: string;
}

@Component({
  selector: 'app-algorithm',
  templateUrl: './algorithm.component.html',
  styleUrls: ['./algorithm.component.scss']
})

export class AlgorithmComponent implements OnInit {

  public algos: Algorithm[];
  constructor(private utilityservice: UtilityService) { }

  ngOnInit(): void {
    this.algos = this.utilityservice.getAlgolist();
  }

  downloadFile(url: string) {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', url);
    link.setAttribute('download', 'OS.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  openFile(url: string) {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', url);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
