import React from 'react';
import './App.scss';

function QuoteGeneratorCard() {
  return (
    <body id="bootstrap-override">
      <div id="quote-box">
        <div id="text-zone">
          <h3>
            <i className="fas fa-quote-left"></i>
            <span id="text">Someone Wrote a Quote here. Lorum Ipsum blah blah blah blah blah filling up the element</span>
          </h3>
        </div>
        <div id="author-zone">
          <span id="author">-Author</span>
        </div>
        <div id="button-zone">
          <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_top"><i className="fab fa-twitter-square fa-2x"></i></a>
          <button id="new-quote" className="btn btn-primary btn-sm">New Quote</button>
        </div>
      </div>
    </body>
  );
}

export default QuoteGeneratorCard;