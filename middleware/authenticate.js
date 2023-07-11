// middleware/authenticate.js
const apiKey = process.env.API_KEY;

const authenticate = (req, res, next) => {
  const clientApiKey = req.headers['apikey'];

  if (clientApiKey && clientApiKey === apiKey) {
    // Authentication successful
    next();
  } else {
    // Authentication failed
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = authenticate;
