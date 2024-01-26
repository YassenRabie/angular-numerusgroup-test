const { ARTICLES_DATA, INFORMATION_DATA } = require("../db");

// get navigation routes
const getNavigation = async (req, res) => {
  try {
    const navigation = [
      {
        id: "dashboard",
        name: "Dashboard",
        url: "/dashboard",
        children: ARTICLES_DATA.map((artical) => ({ id: artical.id, name: artical.title, url: `/artical/${artical.id}` })),
      },
      {
        id: "information",
        name: "Information (Tables)",
        children: INFORMATION_DATA.map((info) => ({ id: info.id, name: info.title, url: `/information/${info.id}` })),
      },
    ];

    res.status(200).json(navigation)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  getNavigation,
}