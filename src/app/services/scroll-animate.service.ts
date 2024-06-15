import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollAnimateService {

  constructor() { }

  create_anima(pri_class:string, active_class:string, inactive_class:string, height_percent:number){
    const pris=document.querySelectorAll(`.${pri_class}`)

    pris.forEach((element) => {
      let top=element.getBoundingClientRect().top

      if(top < window.innerHeight-(window.innerHeight*height_percent)){

        element.classList.add(active_class)
        element.classList.remove(inactive_class)

      }else{

        element.classList.add(inactive_class)
        element.classList.remove(active_class)

      }
    });
}


}