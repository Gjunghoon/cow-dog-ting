const express = require("express");
const app = express();

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("hello 소개팅");
});
