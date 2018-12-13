import React from 'react';
import './QuoteActionButtons.css';
import GetQuoteButton from '../GetQuoteButton/GetQuoteButton';
import GetColorButton from '../GetColorButton/GetColorButton';
import AddFavoriteButton from '../AddFavoriteButton/AddFavoriteButton';

const QuoteActionButtons = (props) => (
	<div className="QuoteActionButtons">
		<GetQuoteButton color={props.color} changeQuote={props.changeQuote} />
		<GetColorButton color={props.color} changeColor={props.changeColor} />
		<AddFavoriteButton color={props.color} />
	</div>
)

export default QuoteActionButtons;