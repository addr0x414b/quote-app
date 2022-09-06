import { Component, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  addingQuote: boolean = false;
  constructor(private qs: QuotesService) { }

  ngOnInit(): void {
    this.qs.getAddingQuote().subscribe((b) => {
      this.addingQuote = b;
    });
  }

  addQuote(): void {
    this.qs.toggleAddingQuote();
  }

  getQuoteCount(): number {
    return this.qs.getQuoteCount();
  }

}
