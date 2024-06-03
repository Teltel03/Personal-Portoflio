import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }

  hideSidenav() {
    const checkbox = document.getElementById('check') as HTMLInputElement;
    if (checkbox.checked) {
      checkbox.checked = false;
    }
  }
}
