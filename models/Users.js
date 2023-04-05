const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = Schema({

    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    passwords: {
        type: String,
        required: true
    }

})

const User = mongoose.model('User', UserSchema);
User.createCollection();
module.exports = User;