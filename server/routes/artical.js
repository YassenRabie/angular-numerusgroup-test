const express = require("express")

// controller functions
const {
  getArticals,
  getArtical
} = require("../controllers/articalController");

const router = express.Router()

// get all articals
router.get("/", getArticals)

// get a single artical
router.get("/:id", getArtical)

module.exports = router