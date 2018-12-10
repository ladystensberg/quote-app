const express = require('express');

require('./config/database');
const app = express();

app.listen(3001, () => {
	console.log('listening on port 3001...');
})