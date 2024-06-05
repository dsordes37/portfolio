import { Component, OnInit } from '@angular/core';
import { projects } from 'src/assets/data/projects';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  id:string|null='0';
  laptop_img:string='';
  cell_img:string='';
  title:string='';
  text:string='';
  ano:string='';
  demo:string=''
  inspirations:string[]=['']

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value=>this.id=value.get('id'));
    this.setValueToContent(this.id)
    
  }

  setValueToContent(id:string|null){
    const result=projects.filter(projects=> projects.id==id)[0]
    this.laptop_img=result.laptop_img;
    this.cell_img=result.cell_img;
    this.title=result.nome;
    this.ano=result.ano;
    this.demo=result.demo_url;
    this.inspirations=result.insperations;

  }

}
