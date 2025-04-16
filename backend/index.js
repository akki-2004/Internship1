const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const accountRoutes = require('./routes/accounts');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/login', authRoutes);
app.use('/accounts', accountRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));