const mongoose = require('mongoose')
const { Schema } = mongoose;

const Todo = new Schema({
    title:{
        type:String,
    },
    Description:{
        type:String,
    },
    todoStatus:{
        type:Boolean,
        default:false,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
    },
    date:{
        type:Date,
        default:Date.now
    }
});


module.exports = mongoose.model('todo', Todo);