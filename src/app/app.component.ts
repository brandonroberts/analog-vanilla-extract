import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as styles from './app.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="{{styles.container}}">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent {
  styles = styles;
}
