const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
