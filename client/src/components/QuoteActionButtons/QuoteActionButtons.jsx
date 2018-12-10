import React from 'react';
import GetQuoteButton from '../GetQuoteButton/GetQuoteButton';
import './QuoteActionButtons.css';

const QuoteActionButtons = (props) => (
	<div className="QuoteActionButtons">
		<GetQuoteButton getQuote={props.getQuote} />
		<GetQuoteButton getQuote={props.getQuote} />
		<GetQuoteButton getQuote={props.getQuote} />
	</div>
)

export default QuoteActionButtons;