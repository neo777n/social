import { Component, signal } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSidenavModule, MatButtonModule, MatMenuModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private router: Router) {
  }

  protected readonly title = signal('untitled');
  goToIndex() {
    this.router.navigate(['/', 'index']);
  }
  goToAboutUs() {
    this.router.navigate(['/', 'about-us']);
  }

  goToAccountInfo() {
    this.router.navigate(['/account', 'account-info']);
  }

  goToNewPost() {
    this.router.navigate(['/posts', 'new-post']);
  }
}
