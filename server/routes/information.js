const express = require("express")

// controller functions
const {
  getInformation,
  getInformationById,
} = require("../controllers/informationController");

const router = express.Router()

// get all articals
router.get("/", getInformation)

// get a single artical
router.get("/:id", getInformationById)

module.exports = router