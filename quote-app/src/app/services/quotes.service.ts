import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Quote } from '../models/Quote';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor() { }

  private addingQuote: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private addQuoteB: boolean = false;
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
    },
    {
      id: "alwdhjalfwh",
      text: "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.",
      author: "Rob Siltanen"
    }
  ];

  getQuoteCount(): number {
    return this.quoteCount;
  }

  getAddingQuote(): Observable<boolean> {
    return this.addingQuote.asObservable();
  }

  toggleAddingQuote(): void {
    this.addQuoteB= !this.addQuoteB;
    this.addingQuote.next(this.addQuoteB)
  }

  getRandomQuote(): Quote {
    const quote = this.quotes[Math.floor(Math.random() * this.quotes.length)]
    return quote
  }

}
