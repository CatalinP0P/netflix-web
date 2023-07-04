const admin = require("../lib/firebase");

const validateIdToken = async (req, res, next) => {
  const tokenHeader = req.headers["authorization"];
  if (!tokenHeader) return res.sendStatus(401);

  const token = tokenHeader.split(" ")[1];
  if (!token) return res.sendStatus(403);

  admin
    .auth()
    .validateIdToken(token)
    .then((userCredentials) => {
      req.user = userCredentials.user;
      return next();
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(403);
    });
};

module.exports = {
  validateIdToken: validateIdToken,
};
