const express = require('express');
const config = require('./config');
const userRoutes = require('./routes/users');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

// Connect to PostgreSQL using the hardcoded credentials
const { Pool } = require('pg');
const pool = new Pool({
  host: config.db.host,
  port: config.db.port,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database
});

// Simple JWT‑protected route
app.get('/secret', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    const payload = jwt.verify(token, config.jwtSecret);
    res.json({ message: 'Top secret data', user: payload.user });
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

app.use('/users', userRoutes);

app.listen(3000, () => console.log('API listening on port 3000'));
