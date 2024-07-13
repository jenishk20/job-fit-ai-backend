const express = require("express");
const router = express.Router();
const appController = require("../controller/appController");

router.get("/", (req, res) => {
  res.send("<h1>The Express APIs are working</h1>");
});

router.get("/products", (req, res) => {
  res.send([
    {
      productId: 1,
      productDescription: "This is first Product",
    },
    {
        productId: 2,
        productDescription: "This is Second Product",  
    },
  ]);
});

router.get("/get-match-comments", appController.getComments);

module.exports = router;
