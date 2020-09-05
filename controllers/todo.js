const List = require('../models/list');

module.exports.profile = function (req, res) {
    List.find({}, function (err, lists) {
        if (err) {
            console.log('there was an error in finding all the lists from the database', err);
            return res.send('<h1>Error in finding lists from the database</h1>');
        }
        // console.log('yoyoy honey singh', lists);
        return res.render('todolist', {
            lists: lists,
            title: "yoyo honey singh"
        });
    })

}
module.exports.create = function (req, res) {
    // console.log(req.body);
    List.create(req.body, function (err, newList) {
        if (err) {
            console.log("There was an error in creating the list", err);
            return;
        }
        console.log('****', newList);
        return res.redirect('back');
    });

}
module.exports.delete = function (req, res) {
    console.log("hello");
    
    List.findByIdAndDelete(req.params.id, function (err) {
        if (err) {
            console.log("there was an error in deleting the list from database ", err);
        }
        console.log("list sucessfully deleted from the database");

        return res.redirect('back');
    });

}
//AArhi hai awaaj mujhe
