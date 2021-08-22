//it is the schema of every list item
const mongoose = require('mongoose');
const listSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});
//telling about model to mongoose
const List = mongoose.model('list', listSchema);
module.exports = List;
