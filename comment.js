// Create web server
// Create a server using the express module
// Create a server using the express module
const express = require('express');
const app = express();
const port = 3000;

// Create a request handler for the root path
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});