const express = require('express');

const quoteController = require('../controller/quoteController');

const router = express.Router();

router.get('/randomQuote', quoteController.getRandomQuote);

router.post('/sendQuote', quoteController.postQuoteToSlack);

module.exports = router;
