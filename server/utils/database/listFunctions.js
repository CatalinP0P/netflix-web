const { ObjectId } = require("mongodb");
const db = require("../../lib/mongo");

const lists = db.collection("lists");

const get = async (userID) => {
  const ids = lists.find({ userID: userID }).toArray();
  return ids;
};

const getShowState = async (userID, showID) => {
  const show = await lists.find({ userID: userID, showID: showID }).toArray();
  return show.length ? true : false;
};

const toggleShow = async (userID, showID) => {
  const actualState = await getShowState(userID, showID);
  console.log(actualState)

  if (actualState) {
    await lists.deleteOne({ userID: userID, showID: showID });
    return false;
  } else {
    await lists.insertOne({ userID: userID, showID: showID });
    return true;
  }
};

module.exports = {
  get: get,
  getShowState: getShowState,
  toggleShow: toggleShow,
};
