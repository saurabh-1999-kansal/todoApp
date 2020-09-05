const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/todo-list');
const db=mongoose.connection;
db.on('error',console.error.bind(console,'there was an error linking mongoose to mongoDB'));
db.once('open',function(){
    console.log('Mongoose is sucessfully linked to database:MongoDB');
});
module.exports=db;

