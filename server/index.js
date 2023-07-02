require("dotenv").config();
const express = require("express");
const db = require("./lib/mongo");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express());
app.use(cors());

app.use("/shows", require("./routers/shows"));

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
