const router = require("express").Router();

const {
  getAll,
  getById,
  searchByTitle,
  searchByCategory,
  addShow,
  getRandom,
} = require("../utils/database/showFunctions");

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
