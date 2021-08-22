//In middleware we can access both the request and the response
//this middlewre is made for setting the configuration of flash
//as at backend we have put the messages in te req,and client can access response only so it need to be set to it's locals
module.exports.setFlash = function (req, res, next) {
    
    res.locals.flash = {
        'success': req.flash('success'),
        'error': req.flash('error')
    }
    //without this call it will not move to the next middleware
    next();
}