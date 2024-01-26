const express = require("express")

// controller functions
const {
  getNavigation,
} = require("../controllers/navigationController");

const router = express.Router()

// get navigation array
router.get("/", getNavigation)

module.exports = router