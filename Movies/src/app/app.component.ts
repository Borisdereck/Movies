import { AngularFireModule } from 'angularfire2';
import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

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
  formMovieQuotes: movieQuote = {
    'quote': '',
    'movie': ''
  };

  movieQuotes: Array<movieQuote> = [
    { movie: '007', quote: 'UUulala' },
    { movie: 'the mechanics', quote: 'UUulala' },
    { movie: 'titanic', quote: 'UUulala' },
    { movie: 'loco por mary', quote: 'UUulala' },
  ];

  constructor(db: AngularFireDatabase){

  }

  onSubmit(): void {
    console.log('Data:', this.formMovieQuotes);
    this.movieQuotes.unshift(this.formMovieQuotes);
    
    // this.formMovieQuotes = {
    //   'quote': '',
    //   'movie': ''
    // };
  }
}
