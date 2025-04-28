const express = require('express');
const config = require('./config');
const userRoutes = require('./routes/users');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

// Connect to PostgreSQL using environment variables
const { Pool } = require('pg');
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Simple JWT‑protected route
app.get('/secret', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ message: 'Top secret data', user: payload.user });
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

app.use('/users', userRoutes);

app.listen(3000, () => console.log('API listening on port 3000'));