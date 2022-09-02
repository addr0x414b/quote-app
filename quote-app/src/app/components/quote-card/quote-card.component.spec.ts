import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteCardComponent } from './quote-card.component';

describe('QuoteCardComponent', () => {
  let component: QuoteCardComponent;
  let fixture: ComponentFixture<QuoteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
