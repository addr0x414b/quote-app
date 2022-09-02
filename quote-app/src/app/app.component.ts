import { Component } from '@angular/core';
import { QuotesService } from './services/quotes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quote-app';

  constructor(private qs: QuotesService) {}

  getQuoteCount(): number {
    return this.qs.getQuoteCount();
  }

}
