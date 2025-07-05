const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const connectDB = require('./config/db');
const router = require('./routes');

const app = express();

// ✅ Apply CORS early
app.use(cors({
    origin: process.env.FRONTEND_URL || 'https://ecommerc-for-electronics-ehna.vercel.app',
    credentials: true
}));

// ✅ Parse incoming JSON
app.use(express.json());

// ✅ Parse cookies
app.use(cookieParser());

// ✅ Mount API routes
app.use('/api', router);

// ✅ Correct PORT usage
const PORT = process.env.PORT || 8080;

// ✅ Connect DB and start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("✅ Connected to MongoDB");
        console.log("🚀 Server is running on http://localhost:" + PORT);
    });
}).catch((err) => {
    console.error("❌ Failed to connect to DB:", err);
});
