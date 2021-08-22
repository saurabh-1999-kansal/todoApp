const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo');

//this is whent the first time get request of this page will be done
router.get('/', todoController.profile);
//this when the user fils the form and then submit it 
router.post('/todoApp', todoController.create);
//for deleting 
router.get('/delete/:id',todoController.delete);

module.exports = router;
