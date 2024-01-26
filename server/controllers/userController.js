const { USERS_DATA } = require("../db")

// login user
const loginUser = async (req, res) => {
  const { username, password } = req.body

  try {
    const user = USERS_DATA.find((u) => u.username === username && u.password === password);

    if (!user) {
      res.status(400).json({ error: "Username or Password is not correct" })
      return;
    }

    res.status(200).json({ user })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  loginUser,
}