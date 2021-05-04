import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../services/utility.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string;
  currentYear: string;
  major: string;
  graduateYear: number;
  interests: Array<string>;
  bikeURL: string;
  runningURL: string;
  swimmingURL: string;
  badmintonURL: string;
  skiingURL: string;
  snowboardURL: string;

  constructor(private utilityService: UtilityService, public popup: MatDialog) { }

  ngOnInit(): void {
    this.name = 'Donglin Jia';
    this.currentYear = 'forth';
    this.major = 'Computer Science';
    this.graduateYear = 2022;
    this.interests = ['Machine Learning', 'Web implementation', 'Security', 'Automation testing'];
    this.bikeURL = 'assets/img/bike.jpg';
    this.runningURL = 'assets/img/running.jpg';
    this.skiingURL = 'assets/img/skiing.png';
    this.swimmingURL = 'assets/img/swimming.jpeg';
    this.badmintonURL = 'assets/img/badminton.jpg';
    this.snowboardURL = 'assets/img/snowboarding.jpeg';
  }

  openPopup(type: string) {
    this.popup.open(PopupComponent, {
      maxWidth: '60vh',
      minHeight: '20vh',
      data: this.utilityService.getSportsData(type)
    });
  }

}
