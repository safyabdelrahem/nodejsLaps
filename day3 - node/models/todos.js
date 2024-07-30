const mongoose = require('mongoose');

const todosSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required: [true, "userId is required"]
    },
    title: {
        type: String,
        required: [true, "title is required"],
        unique: true,
        minLength: 5,
        maxLength: 20,
        trim:true
    },
    status: {
        type: String,
        required: false,
        enum: ['done', 'progress', 'todo'],
        default: 'todo',
    },

},{timestamps:true})

const todosModel = mongoose.model('Todo', todosSchema);

module.exports = todosModel;