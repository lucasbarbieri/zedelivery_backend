const { Router } = require("express");
const PartnerController = require("./src/app/Controllers/PartnerController");
const routes = new Router();

routes.get("/", function(req, res, next) {
  res.status(200).send({
    title: "Welcome Integration ZeDelivery Backend Test",
    version: "1.0"
  });
});

routes.get("/partners", PartnerController.get);
routes.get("/partners/:id", PartnerController.getById);
routes.post("/partners", PartnerController.store);

module.exports = routes;
