import {Component, OnInit} from '@angular/core';
import { trigger, transition, animate, style, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('linksAnimation', [
      transition('* => *', [
        query('a', style({ transform: 'translateX(500%)'})),
        query('a',
          stagger('200ms', [
            animate('500ms', style({ transform: 'translateX(0)'}))
          ]))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {

  title = 'personal-website';
  public emailAddress: string;

  ngOnInit(): void {
    this.emailAddress = 'jiadonglin266071@gmail.com';
  }
}
