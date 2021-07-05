const userAuth = require("./user.auth");
const bloodbankAuth = require("./bloodbank.auth");
const bloodbankRoutes = require("./bloodbankRoute");

module.exports = (app) => {
  //user registration
  app.use("/api/v1/user/auth", userAuth);
  //Other bloodbank routes - Apart from authentication
  app.use("/api/v1/bloodbank", bloodbankRoutes);
  //For bloodbank Authentication
  app.use("/api/v1/bloodbank/auth", bloodbankAuth);
};
