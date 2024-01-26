const { INFORMATION_DATA } = require("../db")

// get all information
const getInformation = async (req, res) => {
  try {
    const information = INFORMATION_DATA;

    res.status(200).json(information)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// get a single information by id
const getInformationById = async (req, res) => {
  const { id } = req.params

  try {
    const information = INFORMATION_DATA.find((info) => info.id === id);

    res.status(200).json(information)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  getInformation,
  getInformationById,
}