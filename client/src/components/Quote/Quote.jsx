import React from 'react';
import './Quote.css';

const Quote = ({ quote, color }) => (
	<div className="Quote">
		<p>{quote.content}</p>
		<h1 style={{ color: color }}>{quote.author}</h1>
	</div>
)

export default Quote;