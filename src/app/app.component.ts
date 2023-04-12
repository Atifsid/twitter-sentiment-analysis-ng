import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'twitter-sentiment-analysis-ng';
  navLinks: any[];
  activeLinkIndex = -1; 
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Home',
            link: './first',
            index: 0
        }, {
            label: 'Analyze',
            link: './second',
            index: 1
        }, {
            label: 'Compare',
            link: './third',
            index: 2
        }, {
          label: 'Product',
          link: './forth',
          index: 3
      }, {
        label: 'About',
        link: './fifth',
        index: 4
    }, 
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}
}