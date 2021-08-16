import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'personal-website';
  public emailAddress: string;

  ngOnInit(): void {
    this.emailAddress = 'jiadonglin266071@gmail.com';
  }
}
