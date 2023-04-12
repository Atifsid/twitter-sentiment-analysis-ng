import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  lottieOptions: any = {
    path: 'assets/twitter.json',
    renderer: 'svg',
    autoplay: true,
    loop: true,
  };
}