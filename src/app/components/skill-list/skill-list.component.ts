import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {

  skills:{icon:string, nome:string}[]=[{icon:"fa-brands fa-python", nome:'Python'}, {icon:"fa-brands fa-square-js", nome:'JavaScript'}, {icon:"fa-solid fa-code", nome:'TypeScript'}, {icon:"fa-brands fa-php", nome:'PHP'}, {icon:"fa-brands fa-html5", nome:'HTML5'}, {icon:"fa-brands fa-css3-alt", nome:'CSS3'}, {icon:"fa-brands fa-figma", nome:'Figma'}, {icon:"fa-solid fa-code-branch", nome:'Git'}, {icon:"fa-brands fa-github", nome:'GitHub'}, {icon:"fa-solid fa-database", nome:'MySQL'}, {icon:"fa-brands fa-angular", nome:'Angular'}]

  constructor() { }

  ngOnInit(): void {
  }

}
