const List = require('../models/list');

module.exports.profile = function (req, res) {
    List.find({}, function (err, lists) {
        if (err) {
            console.log('there was an error in finding all the lists from the database', err);
            return res.send('<h1>Error in finding lists from the database</h1>');
        }

        req.flash('success', 'Your profile page');
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
        if (req.xhr) {
            console.log("hero");
            return res.status(200).json({
                data: {
                    list: newList
                },
                message: "list created!!!"
            });
        }
        req.flash('success', 'List item created sucessfully');
        console.log('****', newList);
        return res.redirect('back');
    });

}

module.exports.delete = function (req, res) {


    List.findByIdAndDelete(req.params.id, function (err) {
        if (err) {
            console.log("there was an error in deleting the list from database ", err);
        }
        console.log("list sucessfully deleted from the database");
        if (req.xhr) {

            return res.status(200).json({
                data: {
                    list_id: req.params.id
                },
                message: "list deleted sucessfully"
            })
        }
        req.flash('success', 'List item deleted sucessfully');
        return res.redirect('back');
    });

}

