const express = require('express');
const cors = require('cors');

const app = express();

// Allow requests from the specific origin (your Angular application)
app.use(cors({
  origin: 'http://localhost:4200'
}));

// ... Other middleware and route configurations ...

// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
