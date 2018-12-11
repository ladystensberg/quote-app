import React from 'react';
import Quote from '../Quote/Quote';
import './QuoteBox.css';

const QuoteBox = (props) => (
	<div className="QuoteBox">
		<Quote quote={props.quote} />
	</div>
)

export default QuoteBox;