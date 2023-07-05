const { ObjectId } = require("mongodb");
const db = require("../../lib/mongo");

const shows = db.collection("shows");

const getAll = async (category = "") => {
  const response = await shows
    .find({ title: { $regex: category, $options: "i" } })
    .toArray();

  return response;
};

const getRandom = async () => {
  const show = await shows.aggregate([{ $sample: { size: 1 } }]).toArray();
  return show[0];
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

const searchByCategory = async (category) => {
  const response = await shows
    .find({ category: { $regex: category, $options: "i" } })
    .toArray();
  return response;
};

const addShow = async (show) => {
  const response = await shows.insertOne(show);
  return response.insertedId;
};

const getNew = async () => {
  const response = await shows
    .find({ year: new Date().getFullYear() })
    .toArray();
  return response;
};

module.exports = {
  getAll: getAll,
  getById: getById,
  searchByTitle: searchByTitle,
  addShow: addShow,
  searchByCategory: searchByCategory,
  getRandom: getRandom,
  getNew: getNew,
};
