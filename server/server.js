const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());

/**
 * Middleware to parse request bodies as JSON.
 */
app.use(express.json());

/**
 * Routes for handling API requests.
 */
app.use('/', routes);

/**
 * Start the server and listen on the specified port.
 */
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;
