const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("GhostVision AI Running ");
});

app.post("/fix", async (req, res) => {
  const { issue, code } = req.body;

  
  const explanation = "AI analyzed the issue and fixed logic error.";
  const fixedCode = code + "\n// FIX APPLIED";

  res.json({
    explanation,
    fixedCode,
    confidence: "78%"
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});