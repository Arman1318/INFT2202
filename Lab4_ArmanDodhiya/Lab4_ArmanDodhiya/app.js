/**
 * 
 * Author: Arman Dodhiya
 * Student ID: 100865197
 * Date Completed: 2024-04-19
 * Reference : I took help from blackbox to create connection
 */
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Set up static files
app.use(express.static('public'));

// Set up routes
app.use('/', require('./routes/index'));
app.use('/animals', require('./routes/animals'));

// Set up error handling
app.use((err, req, res, next) => {
  res.status(500).send({ error: err.message });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});