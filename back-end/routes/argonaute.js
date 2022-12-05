const express = require('express');
const router = express.Router();

const ArgonauteCtrl = require('../controllers/argonaute');

router.post('/', ArgonauteCtrl.createArgonaute);
router.get('/getAllArgonautes', ArgonauteCtrl.getAllArgonautes);

module.exports = router;