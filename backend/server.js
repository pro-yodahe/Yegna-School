const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs'); // For password hashing
const jwt = require('jsonwebtoken'); // For generating a login token
const db = require('./db'); // Import database connection

const app = express();
const port = 3000;

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
    });
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password || password.length < 8) {
    return res.status(400).json({ error: 'Username, email, and password (minimum 8 characters) are required.' });
  }

  // Hash password before storing it
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ error: 'Error hashing password.' });
    }

    // Create user in the database
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, hashedPassword], (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to register user.' });
      }

      res.status(201).json({ message: 'User registered successfully!', userId: results.insertId });
    });
  });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  // Retrieve user by email
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Database error.' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'User not found.' });
    }

    const user = results[0];

    // Compare password with hashed password in the database
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ error: 'Error checking password.' });
      }

      if (!isMatch) {
        return res.status(400).json({ error: 'Invalid password.' });
      }

      // Generate a JWT token for the user (for session management)
      const token = jwt.sign({ userId: user.id, username: user.username }, 'secretKey', { expiresIn: '1h' });

      res.status(200).json({ message: 'Login successful!', token });
    });
  });
});

// Server listening
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
