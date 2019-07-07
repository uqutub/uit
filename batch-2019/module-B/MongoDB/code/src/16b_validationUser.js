const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        validate: {
            validator: (name) => name.length > 2,
            messgae: 'Name must be longer than 2 characters'
        },
        required: [true, 'Name Should be Required.']
    }
});

const User = mongoose.model('user', UserSchema);

const user = new User({
    name: 'Al'
});

// checking before saving in database
const validationResult = user.validateSync(); // SYNC
const {
    message
} = validationResult.errors.name;
console.log('validationResult ', validationResult);
console.log('Message ', message);





// Error after try to Saving on Database
user.save().catch((validationResult) => {
    const {
        message
    } = validationResult.errors.name;
    console.log('Message ', message);
});