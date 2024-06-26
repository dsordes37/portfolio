import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  constructor(private router:Router, private viewport:ViewportScroller) { }

  ngOnInit(): void {
  }

  goTo(id:any){
    this.router.navigateByUrl('').then(()=>{
      this.viewport.scrollToAnchor(id)
    })
  }


}
