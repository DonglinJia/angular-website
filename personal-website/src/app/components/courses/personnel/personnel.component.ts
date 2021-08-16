import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';

export interface Topics {
  title: string;
  intro: string;
  url: string;
}

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {

  public topics: Topics[];
  constructor(private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.topics = this.utilityService.getPersonnelList();
  }

  downloadFile(url: string) {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', url);
    link.setAttribute('download', url);
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
