const router = require("express").Router();

const {
  getAll,
  getById,
  searchByTitle,
  addShow,
} = require("../utils/database/showFunctions");

router.get("/", async (req, res) => {
  try {
    const shows = await getAll();
    res.json(shows);
  } catch (err) {
    res.sendStatus(500);
  }
});

router.get("/:search", async (req, res) => {
  const shows = await searchByTitle(req.params.search);
  res.json(shows);
});

router.post("/", async (req, res) => {
  const { show } = req.body;

  if (!show) return res.status(400).send("Show not specified in body tag");

  const response = await addShow(show);
  res.send(response);
});

module.exports = router;
