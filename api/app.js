const express = require("express");
const app = express();

const PORT = 3001;

const { sequelize } = require("./models");
sequelize.sync({ force: true });

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("hello 소개팅");
});
