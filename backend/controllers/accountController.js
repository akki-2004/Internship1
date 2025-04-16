const { accounts } = require('../models/data');

exports.getAccounts = (req, res) => {
  res.json(accounts);
};

exports.updateStatus = (req, res) => {
  const id = parseInt(req.params.id);
  const { status } = req.body;
  const account = accounts.find(acc => acc.id === id);
  if (!account) return res.status(404).json({ message: 'Account not found' });
  account.accountStatus = status;
  res.json({ message: 'Status updated', account });
};