var express = require('express');
var router = express.Router();
let {User} = require('../lib/models')
/* GET home page. */

// RESTful API's'

// Identifying the actors/entities in the system
// Users - Noun
// Create - POST /users - DONE
// Delete - DELETE /users/1 - delete the user with id = 1
// Update - PUT /users/1 - update the user with id = 1
// Get a User - GET /users/1 - get or fetch a user with id = 1
// Get all users - GET /users - get or fetch all the users in the system - DONE

// Get a User - GET /users/1 - get or fetch a user with id = 1
router.get('/users/:id', async function(req, res, next) {
    let u = await User.findOne({where: {id: req.params.id}})
    res.json(u)
});


// Update - PUT /users/1 - update the user with id = 1
router.put('/users/:id', async function(req, res, next) {
    let u = await User.update(req.body, {where: { id: req.params.id}});
    res.json(u)
});

// Delete - DELETE /users/1 - delete the user with id = 1
router.delete('/users/:id', async function(req, res, next) {
    let u = await User.destroy({where: { id: req.params.id}});
    res.json(u)
});

// Get all users - GET /users - get or fetch all the users in the system
router.get('/users', async function(req, res, next) {
    // request came in here
    // this is where i write code to fetch all the users from the data base.
    let allUsers = await User.findAll({})
    // this is equivalent to this in SQL: select * from Users;


    // below is where i send the users i found from the DB to the front end
    res.json(allUsers)
    // res.render('index', { title: 'Express' });
});

// Create - POST /users
router.post('/users', async function(req, res, next) {
    // request came in here
    // this is where i write code to fetch all the users from the data base.
    let aUser = await User.create(req.body)
    // this is equivalent to this in SQL: select * from Users;


    // below is where i send the users i found from the DB to the front end
    res.json(aUser)
    // res.render('index', { title: 'Express' });
});


router.get('/', function(req, res, next) {
    // request came in here

    res.send('this is the home page for the API router')
    // res.render('index', { title: 'Express' });
});

module.exports = router;
