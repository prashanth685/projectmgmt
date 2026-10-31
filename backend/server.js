const express = require("express");

const app = express();
const port = 5000;

app.listen(port, () => {
  console.info(`Server running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("server is running");
});
