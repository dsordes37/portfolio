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
  text:string='Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quas quibusdam quae veritatis a nobis esse aperiam, ipsum, reprehenderit praesentium nulla facilis corrupti quam iusto, quasi possimus enim doloremque deserunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quod sed placeat voluptatibus. Illo, corporis, suscipit mollitia nihil fuga porro reiciendis, enim voluptatibus saepe ipsa molestiae harum magni modi aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Id totam magnam harum ex accusantium beatae maiores obcaecati repellendus architecto tempora atque cumque vitae dignissimos dolorem odit nulla, iste quidem esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsam nobis perspiciatis aspernatur! Blanditiis maiores dolorem ab aspernatur recusandae autem. Magni sed vitae ea quis, incidunt expedita saepe est impedit.';
  ano:string='';
  demo:string='';
  github:string='';
  inspirations:{url:string, name:string}[]|null=null;
  logo:string='';

  constructor(private route:ActivatedRoute) {
    this.route.paramMap.subscribe(value=>this.id=value.get('id'));
    this.setValueToContent(this.id)
   }

  ngOnInit(): void {
    
    
  }

  setValueToContent(id:string|null){
    const result=projects.filter(projects=> projects.id==id)[0]
    this.laptop_img=result.laptop_img;
    this.cell_img=result.cell_img;
    this.title=result.name;
    this.ano=result.year;
    this.demo=result.demo_url;
    this.github=result.github_url;
    this.inspirations=result.inspirations;
    this.text=result.text;
    this.logo=result.logo;

  }

}
