/* Kameloot quote coming from  https://github.com/sin0light/api-kaamelott
  Used https://api.slack.com/apps/A017AQW1N68/incoming-webhooks?
      https://api.slack.com/tutorials/slack-apps-hello-world

      For Complete project
*/
const axios = require('axios');

require('dotenv').config();

exports.getRandomQuote = async (req, res, next) => {
  try {
    const result = await axios.get('https://kaamelott.chaudie.re/api/random');

    // console.log(result.data);

    res.status(200).json({
      message: 'citation fetched.',
      citation: result.data,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.postQuoteToSlack = async (req, res, next) => {
  // console.log(req);
  // console.log(req.body.data);

  const options = {
    text: req.body.data.citation,
  };

  try {
    await axios.post(process.env.SLACK_WEB_HOOK, JSON.stringify(options));
  } catch (error) {
    console.log(error);
  }

  next();
};
