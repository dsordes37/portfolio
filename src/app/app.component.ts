import { Component, HostListener, AfterViewInit} from '@angular/core';
import { ScrollAnimateService } from 'src/app/services/scroll-animate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements AfterViewInit{
  title = 'portfolio';

  constructor(private animaService:ScrollAnimateService) { }

  ngAfterViewInit(): void {
    this.animaService.create_anima('right_to_center', 'active', 'inactive', .30)
    this.animaService.create_anima('left_to_center', 'active', 'inactive', .30)

    this.animaService.create_anima('top_to_center', 'active', 'inactive', .30)
    this.animaService.create_anima('botton_to_center', 'active', 'inactive', .30)
  }

  @HostListener('window:scroll', ['$event']) onScroll(event:any){
    this.animaService.create_anima('right_to_center', 'active', 'inactive', .30)
    this.animaService.create_anima('left_to_center', 'active', 'inactive', .30)

    this.animaService.create_anima('top_to_center', 'active', 'inactive', .30)
    this.animaService.create_anima('botton_to_center', 'active', 'inactive', .30)
  }
}
