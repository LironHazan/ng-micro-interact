import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  types = [
    'blink',
    'bounce',
    'fade',
    'flicker',
    'groove',
    'jelly',
    'jerk',
    'pop',
    'shake',
    'squeeze',
    'swing',
    'tada'
  ];
}
