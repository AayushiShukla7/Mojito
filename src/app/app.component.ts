import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  title = 'Mojito';

  constructor() {
    gsap.registerPlugin(ScrollTrigger, SplitText);
  }

  ngAfterViewInit(): void {
    
  }
  
}
