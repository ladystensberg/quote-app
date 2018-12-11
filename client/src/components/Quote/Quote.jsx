import React from 'react';
import './Quote.css';

const Quote = ({ quote }) => (
	<div className="Quote">
		<p>{quote.content}</p>
		<h1>{quote.author}</h1>
	</div>
)

export default Quote;