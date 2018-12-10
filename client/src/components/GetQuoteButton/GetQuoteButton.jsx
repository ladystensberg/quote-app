import React from 'react';
import './GetQuoteButton.css';

const GetQuoteButton = (props) => (
	<button onClick={props.changeQuote} className="GetQuoteButton">Change Quote</button>
)

export default GetQuoteButton;