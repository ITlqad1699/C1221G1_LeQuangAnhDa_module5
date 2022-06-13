import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercises';
  rating: string;
  coundownTime: number;

  updateRating(event: string) {
      this.rating = event;
  }

  coundownTimer(event: any) {
      this.coundownTime = event;
  }
}
