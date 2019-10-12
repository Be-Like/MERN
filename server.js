const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false })); // allows us to get data from JSON files (req.body in the users.js file)

app.get('/', (req, res) => res.send('API Running'));

// Define routes
app.use('/api/auth', require('./routes/api/auth.js'));
app.use('/api/posts', require('./routes/api/posts.js'));
app.use('/api/profile', require('./routes/api/profile.js'));
app.use('/api/users', require('./routes/api/users.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
