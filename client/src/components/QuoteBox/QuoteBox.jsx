import React from 'react';
import Quote from '../Quote/Quote';
import './QuoteBox.css';
import GetQuoteButton from '../GetQuoteButton/GetQuoteButton';

const QuoteBox = (props) => (
	<div className="QuoteBox" style={{ backgroundColor: props.color }}>
		<Quote quote={props.quote} />
		<GetQuoteButton getQuote={props.getQuote} />
	</div>
)

export default QuoteBox;