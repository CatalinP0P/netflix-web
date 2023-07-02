require("dotenv").config();
const { MongoClient } = require("mongodb");

const url = process.env.MONGODB_CONNECT;
const client = new MongoClient(url);

client
  .connect()
  .then(() => {
    console.log("Sever connected to mongodb");
  })
  .catch((err) => {
    console.log("MongoDB Error: ", err.message);
  });

const db = client.db("netflix");
module.exports = db;
