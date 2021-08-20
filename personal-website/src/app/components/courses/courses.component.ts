import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  animations: [
    trigger('coursesAnimation', [
      transition('void => *', [
        query('button', style({ transform: 'translateX(-500%)'})),
        query('button',
          stagger('100ms', [
            animate('200ms', style({ transform: 'translateX(0)'}))
          ]))
      ])
    ])
  ]
})
export class CoursesComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  gotoPage(type: string) {
    this.router.navigate([type], {relativeTo: this.route});
  }

}
