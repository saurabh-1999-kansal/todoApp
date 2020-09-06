const List = require('../models/list');
const User = require('../models/user')
module.exports.profile = function (req, res) {
    List.find({}, function (err, lists) {
        if (err) {
            console.log('there was an error in finding all the lists from the database', err);
            return res.send('<h1>Error in finding lists from the database</h1>');
        }
        req.flash('success', 'This is your profile page and all your tasks will be visible here');
        return res.render('todolist', {
            lists: lists,
            title: "yoyo honey singh"
        });
    })
}
module.exports.signUp = function (req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('profile');
    }
    req.flash('success', 'if your id already exists,then click on the sign in button to sign in');
    return res.render('signUp');
}
module.exports.signIn = function (req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('profile');
    }
    req.flash('success', 'Sign in to your id to see your respective tasks');
    return res.render('signIn');
}
module.exports.create = function (req, res) {
    console.log(req.body);
    User.create(req.body, function (err, user) {
        if (err) {
            console.log("Error in creating the user", err);
            return;
        }
        console.log("user's id is perfectly created");
        req.flash('success', 'Your id on todo-app is made successfully');
        return res.redirect('profile');
    })

}
module.exports.createSession = function (req, res) {
    console.log("i m in create session");
    req.flash('success', 'Logged In Successfully');
    return res.redirect('profile');
}
module.exports.signOut = function (req, res) {
    req.logout();
    req.flash('success', 'Signed Out successfully');
    res.redirect('signIn');
}
