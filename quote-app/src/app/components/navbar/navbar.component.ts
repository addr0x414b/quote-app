import { Component, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private qs: QuotesService) { }

  ngOnInit(): void {
  }

  getQuoteCount(): number {
    return this.qs.getQuoteCount();
  }

}
