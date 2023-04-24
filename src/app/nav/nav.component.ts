import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isContentVisible = false;

  showContent() {
    this.isContentVisible = true;
  }

  toggleContent() {
    this.isContentVisible = !this.isContentVisible;
  }
}
