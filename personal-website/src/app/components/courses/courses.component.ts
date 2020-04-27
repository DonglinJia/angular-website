import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  gotoIELTS() {
    this.router.navigate(['IELTS'], {relativeTo: this.route});
  }

  gotoITCT() {
    this.router.navigate(['ComputingTheory'], {relativeTo: this.route});
  }

}
