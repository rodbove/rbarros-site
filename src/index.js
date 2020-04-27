require('dotenv/config');

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();
let port = process.env.PORT || 3333;

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(port, () => {
  console.log('Backend running');
})
