const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const cors = require("cors");

// midleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Simple CRUD Server runnig");
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
