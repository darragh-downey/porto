import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  project;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    // this.project = portfolio[+params.get('projectId')];
    //})
  }

}
