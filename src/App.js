import React from 'react';
import './App.css';

function QuoteGeneratorCard() {
  return (
    <body>
      <div id="wrapper">
      <div id="quote-box">
        <div class="quote-text">
          <span id="text">Someone Wrote a Quote here. Lorum Ipsum blah blah blah blah blah filling up the element</span>
          <span id="author">-Author</span>
          <button id="new-quote">New Quote</button>
          <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet this quote</a>
        </div>
      </div>
      </div>
    </body>
  );
}

export default QuoteGeneratorCard;