import { Component, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/services/quotes.service';
import { Quote } from 'src/app/models/Quote';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.scss']
})
export class QuoteCardComponent implements OnInit {

  quote: Quote = {id:"", text:"", author:""};

  constructor(private qs: QuotesService) {
    this.quote = qs.getRandomQuote();
  }

  ngOnInit(): void {
  }

}
