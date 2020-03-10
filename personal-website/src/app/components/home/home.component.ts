import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../services/utility.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent, PopupData} from './popup/popup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  emailAddress: string;
  name: string;
  currentYear: string;
  major: string;
  graduateYear: number;
  interests: string;
  workExperience: string;
  bikeURL: string;
  runningURL: string;
  swimmingURL: string;
  badmintonURL: string;
  skiingURL: string;
  snowboardURL: string;

  constructor(private utilityService: UtilityService, public popup: MatDialog) { }

  ngOnInit(): void {
    this.emailAddress = 'd24jia@uwaterloo.ca';
    this.name = 'Donglin Jia';
    this.currentYear = 'third';
    this.major = 'Computer Science';
    this.graduateYear = 2022;
    this.interests = 'I am really interested in Artificial intelligence, network security and web design. ';
    this.workExperience = 'I used to work for RBC Capital Markets technology global equity trading team.' +
      'Worked with 12 automation developers, developed and designed automation framework by using Selenium automation tools. ' +
      'In my second work term, I worked as an innovation engineer for Scotiabank FactoryU.' +
      ' Developed web application by using Angular and Django.' +
      ' Implemented Front-End components by using various libraries, including ag-grid and chart.js. ' +
      'Creating endpoint and designing proper data structure in Django';
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
