import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title = 'ba-app';

  ngOnInit(): void {
    console.log(`${this.title} js is run!`);
  }
}
