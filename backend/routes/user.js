const express = require('express');
const router = express.Router();

const users = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    ssn: '123-45-6789',              
    phone: '+1-202-555-0143' 
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    ssn: '987-65-4321',
    phone: '+1-202-555-0198'
  }
];

router.get('/', (req, res) => res.json(users));

module.exports = router;
