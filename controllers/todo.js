const List = require('../models/list');
//this is the profile page of user where his todo's are there
module.exports.profile = function (req, res) {
    //for finding all the list items from DB
    List.find({}, function (err, lists) {
        //to handle if any error comes while finding the list items
        if (err) {
            console.log('there was an error in finding all the lists from the database', err);
            return res.send('<h1>Error in finding lists from the database</h1>');
        }
//for setting the success message to flash
        req.flash('success', 'Your profile page');
        return res.render('todolist', {
            lists: lists,
            title: "Todo-list"
        });
    })

}
//this function is for creating a new list item everytime
module.exports.create = function (req, res) {
    
    List.create(req.body, function (err, newList) {
        if (err) {
            console.log("There was an error in creating the list", err);
            return;
        }
        //here we have handled the ajax request ,as it is the xhr request which will be caling this action of the controller
        if (req.xhr) {
            //returning the data from the controller to the success funtion of the ajax ,along with some message and status
            return res.status(200).json({
                //this returned list will be used to make the new list item
                data: {
                    list: newList
                },
                message: "list created!!!"
            });
        }
        //this message is returned when the req is not of type ajax
        req.flash('success', 'List item created sucessfully');
      
        return res.redirect('back');
    });

}
//for implementing the delete funtionality of the list item
module.exports.delete = function (req, res) {

//as the id of the list was sent in the params
    List.findByIdAndDelete(req.params.id, function (err) {
        if (err) {
            console.log("there was an error in deleting the list from database ", err);
            return;
        }
 //again handling the azax request
        if (req.xhr) {

            return res.status(200).json({
                data: {
                    //list id is returned so that it can be directly deleted from the dom
                    list_id: req.params.id
                },
                message: "list deleted sucessfully"
            })
        }
        req.flash('success', 'List item deleted sucessfully');
        return res.redirect('back');
    });

}

