const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const connectdb = require("./config/connectdb");

dotenv.config();

connectdb();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

// User routes
app.use("/api/users", require("./routes/userRoutes"));

// Transaction routes
app.use("/api/transactions", require("./routes/transactionRoutes"));

// Default route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 
