import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  public emailAddress: string;
  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.emailAddress = 'd24jia@uwaterloo.ca';
  }

  gotoPage(type: string) {
    this.router.navigate([type], {relativeTo: this.route});
  }

}
