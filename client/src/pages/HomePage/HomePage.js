import React from 'react';
import QuoteBox from '../../components/QuoteBox/QuoteBox';
import QuoteActionButtons from '../../components/QuoteActionButtons/QuoteActionButtons';

const HomePage = ({ color, quote, changeColor, changeQuote }) => (
	<div className="HomePage" style={{ backgroundColor: color }}>
		<div className="Main">
			<QuoteBox quote={quote} color={color} />
			<QuoteActionButtons color={color} changeColor={changeColor} changeQuote={changeQuote} />
		</div>
	</div>
)

export default HomePage;