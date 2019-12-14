const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// mongoose.connect('mongodb://admin:admin123@ds119652.mlab.com:19652/demo-uit-class')
mongoose.connect('mongodb://admin:admin123@ds049104.mlab.com:49104/uit-moduleb')

mongoose.connection
	.once('open', () => {
		console.log('Yahooo! Connection is Established.');

		const UserSchema = new Schema({
			name: String
		});
		
		const User = mongoose.model('user', UserSchema);


		const joe = new User({ name: 'Usuf' });
		console.log(joe.isNew);
		joe.save()
		.then((u) => {
			console.log('Saved ', u)
			console.log(joe.isNew);
		})
		.catch((err) => console.log('Err ', err));

	})
	.on('error', (err) => {
		console.log('Err: ', err);
	})
