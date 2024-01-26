const { ARTICLES_DATA } = require("../db")

// get all articals
const getArticals = async (req, res) => {
  try {
    const articals = ARTICLES_DATA;

    res.status(200).json(articals)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// get a single artical by id
const getArtical = async (req, res) => {
  const { id } = req.params

  try {
    const artical = ARTICLES_DATA.find((artical) => artical.id === id);

    res.status(200).json(artical)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  getArticals,
  getArtical
}