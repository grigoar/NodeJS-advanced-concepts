const { clearHash } = require("../services/cache");

// this is a trick to run the middleware afte the response is send to the client
module.exports = async (req, res, next) => {
  await next();

  clearHash(req.user.id);
};
