const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/quote-app', { useNewUrlParser: true });

db.once('open', () => {
	console.log('Mongoose Connected');
})