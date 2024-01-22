const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "0098",
  host: "localhost",
  port: 5432,
  database: "generator",
});

module.exports = {
  pool,
};
