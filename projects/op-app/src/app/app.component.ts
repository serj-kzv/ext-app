import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  title = 'op-app';

  ngOnInit(): void {
    console.log(`${this.title} js is run!`);
  }
}
