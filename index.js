const express = require('express');

require('./config/database');
const app = express();

app.listen(3000, () => {
	console.log('listening on port 3000...');
})