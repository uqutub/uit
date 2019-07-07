const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin123@ds119652.mlab.com:19652/demo-uit-class')

mongoose.connection
	.once('open', () => {
		console.log('Yahooo! Connection is Established.');
	})
	.on('error', (err) => {
		console.log('Err: ', err);
	})
