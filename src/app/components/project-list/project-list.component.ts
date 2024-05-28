import { Component, OnInit } from '@angular/core';
import { projects } from 'src/assets/data/projects';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  proj=projects

  constructor() { }

  ngOnInit(): void {
  }

}
