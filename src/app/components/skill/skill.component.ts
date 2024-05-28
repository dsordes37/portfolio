import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() icon:string="fa-brands fa-python";
  @Input() nome:string="pyhton"

  constructor() { }

  ngOnInit(): void {
  }

}
