const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Express Server' });
});

// Start server
app.listen(PORT,"0.0.0.0",  () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
