import { Injectable } from '@angular/core';
import { Quote } from '../models/Quote';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor() { }

  private quoteCount: number = 3;
  private quotes: Quote[] = [
    {
      id: "awdawd",
      text: "No matter who you are, who your parents are or were, where you live, what you do for a living, or how much money you have, you’re probably living at about 40 percent of your true capability.",
      author: "David Goggins"
    },
    {
      id: "gjhawd",
      text: "There are three things you can do with your life: You can waste it, you can spend it, or you can invest it. The best use of your life is to invest it in something that will last longer than your time on Earth.",
      author: "Rick Warren"
    },
    {
      id: "awdawfawfd",
      text: "We begin, then, with the basic premise that the purpose of our life is to seek happiness. It is a vision of happiness as a real objective, one that we can take positive steps toward achieving",
      author: "Dalai Lama"
    }
  ];

  getQuoteCount(): number {
    return this.quoteCount;
  }

  getRandomQuote(): Quote {
    const quote = this.quotes[Math.floor(Math.random() * this.quotes.length)]
    return quote
  }

}
