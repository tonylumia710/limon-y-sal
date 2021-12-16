const express = require('express');
const router = express.Router();

/* GET home page. */
const {index, detail} = require("../controllers/mainController");

router.get("/", index);
router.get("/detalle/:id", detail);

module.exports = router;
