import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  burguer_active:boolean=false;
  cont_height:string='3.7rem';

  constructor() { }

  ngOnInit(): void {
  }

  menu(){
    if(this.burguer_active){
      this.burguer_active=false;
      this.cont_height='3.7rem'
    }else{
      this.burguer_active=true;
      this.cont_height='80vh'
    }
  }

}
