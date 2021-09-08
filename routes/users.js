var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Respond back from the users router and terminate the request');
});


// RESTFUL routes
// Databases

router.post('/settings/update', function(req, res, next) {
  console.log('req.body', req.body)

  res.json({success: 'ok'})
})

// <form url='http://localhost:3000/users/settings/update'> POST to http://localhost:3000/users/settings/update
//     <input type=text name=firstName>
//     <input type=text name=lastName>
// </form>

router.get('/settings/:name', function(req, res, next) {
  // console.log(req)
  console.log('req.params', req.params)
  console.log('req.query', req.query)

  // you will do some database lookups
  // get the data from the database
  // manipulate the data in whatever way
  // finally send back the response

  // debit the money from the user account
  // if success create an order
  // send an email for the order success
  // if not enough cash, then show error
  // maybe send an email
  // setTimeout(() => {
  //   res.send('Terminate the request at the john endpoint');
    res.json({firstName: 'John', lastName: 'Doe'});
  // }, 10000)

});


module.exports = router;
