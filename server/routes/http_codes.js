//http data obtained from https://status.js.org/codes.json

const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/", async (req, res) => {
  try {
    const result = await db.pool.query("SELECT * FROM http_status_codes");
    // console.log(result);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
