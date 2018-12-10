import React from 'react';
import './GetQuoteButton.css';

const GetQuoteButton = (props) => (
	<button onClick={props.getQuote} className="GetQuoteButton">Get Quote</button>
)

export default GetQuoteButton;