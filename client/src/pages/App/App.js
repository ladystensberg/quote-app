import React, { Component } from 'react';
import './App.css';
import QuoteBox from '../../components/QuoteBox/QuoteBox';
import QuoteActionButtons from '../../components/QuoteActionButtons/QuoteActionButtons';
import Header from '../../components/Header/Header';

let quotes = [
	{
		content: 'Not all who wander are lost',
		author: 'J.R.R Tolkien'
	},
	{
		content: 'Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.',
		author: 'Princess Diana'
	},
	{
		content: "I miss people. I miss going anywhere and meeting a random person and saying 'Hi' and having a conversation about life. I love people.",
		author: 'Lady Gaga'
	}

]

let defaultQuote = {
	content: 'There should be a law that no ordinary newspaper should be allowed to write about art. The harm they do by their foolish and random writing it would be impossible to overestimate - not to the artist, but to the public, blinding them to all but harming the artist not at all.',
	author: 'Oscar Wilde'
}

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			quoteColor: null,
			quotes: quotes,
			currentQuote: defaultQuote
		}
	}

	componentDidMount() {
		// call API
		// set quotes array state
		// call random quote
		// set currentQuote
		this.getRGBValue();
		console.log('testing component did mount');
	}

	getRandomQuote = () => {
		this.getRGBValue();
		let quotes = this.state.quotes;
		let randomValue = Math.floor(Math.random() * (quotes.length));
		let randomQuote = quotes[randomValue];
		return this.setState({
			currentQuote: randomQuote
		})
	}

	getRandomColor = () => {
		return Math.floor(Math.random() * (255 - 0 + 1)) + 0;
	}

	getRGBValue = () => {
		let r = this.getRandomColor();
		let g = this.getRandomColor();
		let b = this.getRandomColor();
		return this.setState({
			quoteColor: `rgb(${r}, ${g}, ${b})`
		})
	}

	render() {

		return (
			<div className="App" style={{ backgroundColor: this.state.quoteColor }}>
				<Header color={this.state.quoteColor} />
				<div className="Main">
					<QuoteBox quote={this.state.currentQuote} color={this.state.quoteColor} />
					<QuoteActionButtons color={this.state.quoteColor} changeColor={this.getRGBValue} changeQuote={this.getRandomQuote} />
				</div>
			</div>
		);
	}
}

export default App;
