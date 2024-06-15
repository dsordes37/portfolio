import { Component,OnInit, HostListener} from '@angular/core';
import { ScrollAnimateService } from 'src/app/services/scroll-animate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'portfolio';

  constructor(private animaService:ScrollAnimateService) { }

  ngOnInit(): void {
    this.animaService.create_anima('sobe', 'active', 'inactive', .30)
  }

  @HostListener('window:scroll', ['$event']) onScroll(event:any){
    this.animaService.create_anima('sobe', 'active', 'inactive', .30)
  }
}
