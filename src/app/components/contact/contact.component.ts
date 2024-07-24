import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  copyTop:string='100%'
  bt_gradient='linear-gradient(to right, var(--color1), var(--color2))'
  bt_text='dsordes.moreira@gmail.com'

  constructor() { }

  ngOnInit(): void {
  }

  copyText(valor:string){
    navigator.clipboard.writeText(valor)

    this.copyTop='0'
  }

  bt_click(email:string){
    this.copyText(email)
    this.bt_gradient='linear-gradient(to right, #20ff00, #59ffc9)'
    this.bt_text='copiado!'

    setTimeout(()=>{
      this.bt_gradient='linear-gradient(to right, var(--color1), var(--color2))'
      this.bt_text=email
    }, 2000)
  }

}
