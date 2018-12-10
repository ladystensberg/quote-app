import React from 'react';
import './Quote.css';

const Quote = ({ quote }) => (
	<div className="Quote">
		<p>{quote.content}</p>
		<p><strong>-- {quote.author}</strong></p>
	</div>
)

export default Quote;