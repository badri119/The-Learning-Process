// Initial data obtained from https://gist.github.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80
// by nasrulhazim
const express = require("express");
const router = express.Router();
const db = require("./database");

// Example to create a Table
// const createTableQuery = `
//   CREATE TABLE IF NOT EXISTS quotes (
//     quote VARCHAR(500) NOT NULL,
//     author VARCHAR(50) NOT NULL
//   );
// `;

router.get("/", async (req, res) => {
  try {
    const result = await db.pool.query("SELECT * FROM quotes");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
