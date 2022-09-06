import { Component } from '@angular/core';
import { QuotesService } from './services/quotes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quote-app';

  addingQuote: boolean = false;

  constructor(private qs: QuotesService) {}

  ngOnInit(): void {
    this.qs.getAddingQuote().subscribe((b) => {
      this.addingQuote = b;
    });
  }

  getQuoteCount(): number {
    return this.qs.getQuoteCount();
  }

}
