const express = require("express");
const router = express.Router();
const appController = require("../controller/appController");

router.get("/get-match-comments", appController.getComments);

module.exports = router;
