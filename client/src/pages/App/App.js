import React, { Component } from 'react';
import './App.css';
import QuoteBox from '../../components/QuoteBox/QuoteBox';

let quote = {
	quote: 'Not all who wander are lost',
	author: 'J.R.R Tolkien'
}

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			quoteColor: null,
			quotes: [],
			testQuote: quote,
			testColor: 'blue',
			currentQuote: null
		}
	}

	componentDidMount() {
		// get new color
		// get new quote
		// set current quote
		// set quote color
		console.log('testing component did mount');
	}



	render() {

		return (
			<div className="App">
				<QuoteBox color={this.state.testColor} quote={this.state.testQuote} getQuote={this.componentDidMount} />
			</div>
		);
	}
}

export default App;
