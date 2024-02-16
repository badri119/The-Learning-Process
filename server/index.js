const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();

// parse requests of content-type - application/json
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("<h1>Hello :))</h1>");
// });

const getAllQuotes = require("./routes/quotes");
const httpCodes = require("./routes/http_codes");
const example = require("./routes/example");

app.use("/quotes", getAllQuotes);
app.use("/http", httpCodes);
app.use("/example", example);

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`);
});
