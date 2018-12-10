import React from 'react';
import GetQuoteButton from '../GetQuoteButton/GetQuoteButton';
import './QuoteActionButtons.css';
import GetColorButton from '../GetColorButton/GetColorButton';

const QuoteActionButtons = (props) => (
	<div className="QuoteActionButtons">
		<GetQuoteButton changeQuote={props.changeQuote} />
		<GetColorButton changeColor={props.changeColor} />
	</div>
)

export default QuoteActionButtons;