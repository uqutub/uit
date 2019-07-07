const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name Should be Required.']
    }
});

const User = mongoose.model('user', UserSchema);

const user = new User({
    name: undefined
});

// user.validate((validationResult) => {});     // ASYNC

const validationResult = user.validateSync();   // SYNC
console.log('validationResult ', validationResult);
console.log('Message ', validationResult.errors.name.message);