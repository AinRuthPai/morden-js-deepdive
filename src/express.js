const express = require("express");
const app = express();
const port = 4000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(__dirname + "index.html");
});

app.listen(port, () => {
  console.log(`Express example app listening on port ${port}`);
  console.log(`http://localhost:${port}`);
});
