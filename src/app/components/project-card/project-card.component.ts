import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() laptop_img:string='../assets/images/portfolio_laptop.png';
  @Input() cell_img:string='../assets/images/portfolio_cel.png';
  @Input() name:string='portfolio';
  @Input() year:string='2024';
  @Input() url:string='project/0'
  

  constructor() { }

  ngOnInit(): void {
  }

}
