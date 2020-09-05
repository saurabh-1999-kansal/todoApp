const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo');
console.log('hello index of routes');
router.get('/todoApp', todoController.profile);
router.post('/todoApp', todoController.create);
router.get('/delete/:id',todoController.delete);

module.exports = router;
