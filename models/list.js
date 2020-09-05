const mongoose = require('mongoose');
const listSchema = new mongoose.Schema({
    description: {
        type: String
    },
    category: {
        type: String,
       
    },
    date: {
        type: String,
       
    }
});
const List = mongoose.model('list', listSchema);
module.exports=List;
