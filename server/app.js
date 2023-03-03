const express = require('express');
const { default: mongoose } = require('mongoose');
const connectDB = require('./config/db');

const app = express();

mongoose.set('strictQuery', false);

// Connect Database
connectDB();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => res.send('API Running'));

// Define routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/post', require('./routes/api/post'));
app.use('/api/comment', require('./routes/api/comment'));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
