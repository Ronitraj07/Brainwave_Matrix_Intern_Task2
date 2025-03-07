const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 8080;

// Enable CORS to allow API calls from the frontend to backend (http://localhost:5000)
app.use(cors());

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, "frontend")));

// Route to serve index.html as the main page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

// Handle 404 errors for missing files
app.use((req, res, next) => {
    res.status(404).send("404: Resource Not Found");
});

// Start the server and handle potential errors
app.listen(PORT, () => {
    console.log(`Frontend server running at http://localhost:${PORT}`);
}).on("error", (err) => {
    console.error("Error starting server:", err.message);
});
