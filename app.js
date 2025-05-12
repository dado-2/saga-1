const express = require('express');
const app = express();
const groupRoutes = require('./routes/groupRoutes');

require('dotenv').config();
app.use(express.json());

app.use('/api/groups', groupRoutes);

module.exports = app;