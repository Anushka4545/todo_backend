const mongoose = require('mongoose')
const { Schema } = mongoose;

const User = new Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    }
});


module.exports = mongoose.model('user', User);