const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = 4000;

// parse requests of content-type - application/json
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("<h1>Hello :))</h1>");
// });

const getAllQuotes = require("./quotes");

app.use("/quotes", getAllQuotes);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
