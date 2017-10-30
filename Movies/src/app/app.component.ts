import { Component } from '@angular/core';

interface movieQuote {
  movie: string,
  quote: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movieQuotes: movieQuote = {
    'quote': '',
    'movie': ''
  };

  onSubmit(): void {
    console.log('Data:', this.movieQuotes);
    this.movieQuotes = {
      'quote': '',
      'movie': ''
    };
  }
}
