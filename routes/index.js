var express = require('express');
var router = express.Router();

var runs = [{date: '2015-01-14', distance: 10, time: 490.3}]
var commonDistances = {toPark: {label: 'To Park', distance:	1.1},
	smallLap: {label: 'Small Lap', distance: 1.3},
	bigLap: {label: 'Big Lap', distance: 1.71},
	toLakes: {label: 'To Lakes', distance: 2.4},
	lakesLap: {label: 'Lakes Lap', distance: 6.7}}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kouri!', runs: runs, commonDistances: commonDistances });
});

module.exports = router;
