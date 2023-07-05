const router = require("express").Router();
const authValidation = require("../validation/auth");

const {
  getAll,
  getById,
  searchByTitle,
  searchByCategory,
  addShow,
  getRandom,
  getNew,
} = require("../utils/database/showFunctions");

const {
  get,
  getShowState,
  toggleShow,
} = require("../utils/database/listFunctions");

router.get("/", async (req, res) => {
  try {
    const shows = await getAll();
    res.json(shows);
  } catch (err) {
    res.sendStatus(500);
  }
});

router.get("/random", async (req, res) => {
  const show = await getRandom();
  res.json(show);
});

router.get("/new", async (req, res) => {
  const shows = await getNew();
  res.json(shows)
});

router.get("/mylist", authValidation.validateIdToken, async (req, res) => {
  const shows = await get(req.user.uid);
  var list = [];

  for (var i = 0; i < shows.length; i++) {
    const show = await getById(shows[i].showID);
    console.log(shows[i]);
    list.push(show);
  }

  res.json(list);
});

router.post(
  "/mylist/:showID",
  authValidation.validateIdToken,
  async (req, res) => {
    const response = await toggleShow(req.user.uid, req.params.showID);
    res.send(response);
  }
);

router.get(
  "/mylist/:productid",
  authValidation.validateIdToken,
  async (req, res) => {
    const response = await getShowState(req.user.uid, req.params.productid);
    res.send(response);
  }
);

router.get("/:id", async (req, res) => {
  const show = await getById(req.params.id);
  res.json(show);
});

router.get("/q/:search", async (req, res) => {
  const shows = await searchByTitle(req.params.search);
  res.json(shows);
});

router.get("/category/:category", async (req, res) => {
  const show = await searchByCategory(req.params.category);
  res.json(show);
});

router.post("/", async (req, res) => {
  const { show } = req.body;

  if (!show) return res.status(400).send("Show not specified in body tag");

  const response = await addShow(show);
  res.send(response);
});

module.exports = router;
