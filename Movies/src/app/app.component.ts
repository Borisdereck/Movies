import { AngularFireModule } from 'angularfire2';
import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

interface movieQuote {
  movie: string ,
  quote: string ,
  $key?: string 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly quotesPath = 'quotes';

  formMovieQuotes: movieQuote = {
    'quote': '',
    'movie': '',
  };

  // movieQuotes: Array<movieQuote> = [
  //   { movie: '007', quote: 'UUulala' },
  //   { movie: 'the mechanics', quote: 'UUulala' },
  //   { movie: 'titanic', quote: 'UUulala' },
  //   { movie: 'loco por mary', quote: 'UUulala' },
  // ];

  public movieQuotesStream: FirebaseListObservable<movieQuote[]>;

  constructor(db: AngularFireDatabase) {
    this.movieQuotesStream = db.list(this.quotesPath);
  }

  onSubmit(): void {
    console.log('Data:', this.formMovieQuotes);
    // this.movieQuotes.unshift(this.formMovieQuotes);  
    try {
      if (this.formMovieQuotes.$key) {
        this.movieQuotesStream.update(this.formMovieQuotes.$key, this.formMovieQuotes);
      } else {
        this.movieQuotesStream.push(this.formMovieQuotes);
      }
      
      this.formMovieQuotes = {
        'quote': '',
        'movie': ''
      };
    } catch (e) {
      console.log('Form error', e);
    }
  }

  edit(movieQuote: movieQuote): void{
    console.log('edit Movie', movieQuote);
    this.formMovieQuotes = movieQuote;
  }

  remove(movieQuoteKey: string): void{
    this.movieQuotesStream.remove(movieQuoteKey);
  }
}
