const router = require('express').Router()

// Controllers
const ReportController = require('./Controllers/ReportController');
// 

router.post('/report',ReportController);

module.exports = router;