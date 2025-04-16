const jwt = require('jsonwebtoken');
const { users } = require('../models/data');
const SECRET = 'supersecret';

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ username }, SECRET);
  res.json({ message: 'Login successful', token });
};
