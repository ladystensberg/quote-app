import React from 'react';
import './Quote.css';

const Quote = (props) => (
	<div className="Quote">
		<p>{props.quote.quote}</p>
		<p><strong>-- {props.quote.author}</strong></p>
	</div>
)

export default Quote;