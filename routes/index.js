var express = require('express');
var router = express.Router();
var util = require('util');

var runs = [{date: '2015-01-14', distance: 10, time: 490.3}]
var commonDistances = {toPark: {label: 'To Park', distance:	1.1},
	smallLap: {label: 'Small Lap', distance: 1.3},
	bigLap: {label: 'Big Lap', distance: 1.71},
	toLakes: {label: 'To Lakes', distance: 2.4},
	lakesLap: {label: 'Lakes Lap', distance: 6.7}}

// Get full common lap info
router.get('/commonFull', function(req, res, next) {
  res.json(commonDistances);
});

// Get only common lap distances
router.get('/common', function(req, res, next) {
  var commonSlim = {}
  for (i in commonDistances) {
  	commonSlim[i] = commonDistances[i].distance
	}
  res.json(commonSlim)
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kouri!', runs: runs, commonDistances: commonDistances });
});

/* POST home page. */
router.post('/', function(req, res) {
  req.assert('date', 'required').notEmpty().len(10).isDate();
  req.assert('run', 'required').notEmpty();
  req.assert('time', 'required').notEmpty();

  console.log(req.validationErrors(true))

  res.render('index', { title: 'Kouri!',
    runs: runs,
    commonDistances: commonDistances,
    errors: req.validationErrors(true) });
});

module.exports = router;
