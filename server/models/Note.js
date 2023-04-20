const mongoose = require('mongoose');
const {Schema} = mongoose;

const NoteSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    discription : {
        type : String,
        required : true,
        unique : true
    },
    tag : {
        type : String,
        required : true,
        default : 'general'
    },
    date : {
        type : date,
        default : Date.now
    }
})

noteModel = mongoose.model('noteModel', NoteSchema);

module.exports = noteModel;
