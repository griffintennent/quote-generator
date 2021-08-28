import React from 'react';
import './App.scss';

const QUOTES = [
  { quote: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.", author: "Aristotle" },
  { quote: "Only those who play to win. Only those who risk to win. History favors risk-takers. Forgets the timid. Everything else is commentary.", author: "Iveta Cherneva" },
  { quote: "I always did something I was a little not ready to do. I think that’s how you grow. When there’s that moment of Wow, I’m not really sure I can do this, and you push through those moments, that’s when you have a breakthrough", author: "Marissa Mayer" },
  { quote: "Don’t be too timid and squeamish about your actions. All life is an experiment. The more experiments you make the better.", author: "Ralph Waldo Emerson" },
  { quote: "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.", author: "Mark Caine" },
  { quote: "You can’t outwit fate by standing on the sidelines placing little side bets about the outcome of life. Either you wade in and risk everything you have to play the game or you don’t play at all. And if you don’t play you can’t win.", author: "Judith McNaught" }
];

class QuoteGeneratorCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      author: ''
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var randomNum = Math.floor(Math.random() * QUOTES.length);

    this.setState({
      text: QUOTES[randomNum].quote,
      author: QUOTES[randomNum].author
    })
  }

  render() {
    return (
      <div id="bootstrap-override">
        <div id="quote-box">
          <div id="text-zone">
            <h3>
              <i className="fas fa-quote-left"></i>
              <span id="text">{this.state.text}</span>
            </h3>
          </div>
          <div id="author-zone">
            <span id="author">-{this.state.author}</span>
          </div>
          <div id="button-zone">
            <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_top" title="Tweet this quote!"><i className="fab fa-twitter-square fa-2x"></i></a>
            <button id="new-quote" className="btn btn-primary btn-sm" onClick={this.handleClick}>New Quote</button>
          </div>
        </div>
      </div>
    );
  };
}

export default QuoteGeneratorCard;