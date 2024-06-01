import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  copyTop:string='100%'

  constructor() { }

  ngOnInit(): void {
  }

  copyText(valor:string){
    navigator.clipboard.writeText(valor)

    this.copyTop='0'
  }

}
