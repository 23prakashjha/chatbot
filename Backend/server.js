// Backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const authRoutes = require('./routes/auth');
const chatbotRoutes = require('./routes/chatbot');

const app = express();

// =====================
// ✅ CORS Configuration
// =====================
const allowedOrigins = [
  'https://chatbot-iota-rosy-39.vercel.app', // your deployed frontend
  'http://localhost:3000', // local dev (optional)
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps, curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'CORS policy does not allow access from this origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// =====================
// ✅ Routes
// =====================
app.use('/api/auth', authRoutes);
app.use('/api/chatbot', chatbotRoutes);

// Simple test route
app.get('/', (req, res) => {
  res.send('Career Chatbot backend is running!');
});

// =====================
// ✅ MongoDB Connection
// =====================
const MONGO_URI =
  'mongodb+srv://prakashjha:9HCxyuc9up7KrMw@cluster0.mwessps.mongodb.net/career-chatbot?retryWrites=true&w=majority&appName=Cluster0';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// =====================
// ✅ Start Server
// =====================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
