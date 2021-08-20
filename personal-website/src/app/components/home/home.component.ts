import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../services/utility.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import { WorkPopUpComponent } from './work-pop-up/work-pop-up.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string;
  currentYear: string;
  major: string;
  minor: string;
  graduateYear: number;
  interests: Array<string>;
  bikeURL: string;
  runningURL: string;
  swimmingURL: string;
  badmintonURL: string;
  skiingURL: string;
  snowboardURL: string;

  sugonURL: string;
  scotiabankURL: string;
  rbcURL: string;
  perkinElmerURL: string;

  constructor(private utilityService: UtilityService, public popup: MatDialog, public workpopup: MatDialog) { }

  ngOnInit(): void {
    this.name = 'Donglin Jia';
    this.currentYear = 'forth';
    this.major = 'Computer Science';
    this.minor = 'Psychology';
    this.graduateYear = 2022;
    this.interests = ['Machine Learning', 'Web implementation', 'Security', 'Automation testing'];
    this.bikeURL = 'assets/img/bike.jpg';
    this.runningURL = 'assets/img/running.jpg';
    this.skiingURL = 'assets/img/skiing.png';
    this.swimmingURL = 'assets/img/swimming.jpeg';
    this.badmintonURL = 'assets/img/badminton.jpg';
    this.snowboardURL = 'assets/img/snowboarding.jpeg';
    this.sugonURL = this.utilityService.getCompanyImgURL('sugon');
    this.scotiabankURL = this.utilityService.getCompanyImgURL('scotiabank');
    this.rbcURL = this.utilityService.getCompanyImgURL('rbc');
    this.perkinElmerURL = this.utilityService.getCompanyImgURL('pkelmer');
    console.log('hello');
  }

  openPopup(type: string) {
    this.popup.open(PopupComponent, {
      maxWidth: '60vh',
      minHeight: '20vh',
      data: this.utilityService.getSportsData(type)
    });
  }

  openWorkPopup(type: string) {
    this.workpopup.open(WorkPopUpComponent, {
      maxWidth: '80vh',
      minHeight: '40vh',
      data: this.utilityService.getWorkData(type)
    });
  }

}
