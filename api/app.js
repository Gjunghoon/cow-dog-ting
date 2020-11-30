const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/userRoutes");

const PORT = 3001;
app.use(cors());

app.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("hello 소개팅");
});

app.use("/users", userRoutes);
