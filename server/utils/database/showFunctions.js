const { ObjectId } = require("mongodb");
const db = require("../../lib/mongo");

const shows = db.collection("shows");

const getAll = async (category = "") => {
  const response = await shows
    .find({ title: { $regex: category, $options: "i" } })
    .toArray();

  return response;
};

const getById = async (id) => {
  const show = await shows.findOne({ _id: new ObjectId(id) });

  return show;
};

const searchByTitle = async (title) => {
  const response = await shows
    .find({ title: { $regex: title, $options: "i" } })
    .toArray();

  return response;
};

const addShow = async (show) => {
  const response = await shows.insertOne(show);
  return response.insertedId;
};

module.exports = {
  getAll: getAll,
  getById: getById,
  searchByTitle: searchByTitle,
  addShow: addShow
};
