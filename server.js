const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/db");
const adminRoutes = require("./Routes/adminRoutes");
const jobRoutes = require("./Routes/jobRoutes");

// Load environment variables
dotenv.config();

const app = express();

connectDB();

app.use(express.json());

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/jobs", jobRoutes);

// Handle invalid routes
app.use((req, res, next) => {
  res.status(404).json({ message: "API route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong", error: err.message });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
