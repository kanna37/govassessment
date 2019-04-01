const router = require('express').Router();
var commonlist = require('./school/common.router');
var register = require('./school/register.router');
var suspend = require('./school/suspend.router');

router.use('/commonstudents', commonlist);
router.use('/register', register);
router.use('/suspend', suspend);
module.exports = router;