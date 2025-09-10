// Oddiy Express.js server
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Frontend fayllarni berish
app.use(express.static("frontend"));

// API misoli
app.get("/api/hello", (req, res) => {
  res.json({ message: "OshSU MOOC Backend ishlayapti!" });
});

app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} da ishlayapti`);
});
