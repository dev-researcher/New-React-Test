// app.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./configs/mongo-config');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const passport = require('passport');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use(express.json());

// Middleware
app.use(bodyParser.json());
app.use(passport.initialize());

require('./configs/passport-config')(passport);

connectDB();

app.use('/api/challenge', routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
