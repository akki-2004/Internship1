const express = require('express');
const router = express.Router();
const { getAccounts, updateStatus } = require('../controllers/accountController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.get('/', authenticateToken, getAccounts);
router.post('/:id/status', authenticateToken, updateStatus);

module.exports = router;