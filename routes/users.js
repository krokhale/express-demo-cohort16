var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Respond back from the users router and terminate the request');
});

router.get('/john', function(req, res, next) {
  // you will do some database lookups
  // get the data from the database
  // manipulate the data in whatever way
  // finally send back the response

  // debit the money from the user account
  // if success create an order
  // send an email for the order success
  // if not enough cash, then show error
  // maybe send an email
  setTimeout(() => {
    res.send('Terminate the request at the john endpoint');
  }, 10000)

});

module.exports = router;
