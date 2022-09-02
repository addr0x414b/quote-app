import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewQuoteComponent } from './components/new-quote/new-quote.component';
import { QuoteCardComponent } from './components/quote-card/quote-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewQuoteComponent,
    QuoteCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
