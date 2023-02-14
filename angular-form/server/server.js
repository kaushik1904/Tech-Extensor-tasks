const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.post("/enroll", (req, res) => {
  console.log(req.body);
  res.status(200).send({ "message : ": "Data Recevied...!!!" });
});

app.listen(PORT, () => {
  console.log(`Server running on localhost : ${PORT}`);
});
