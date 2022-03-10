const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const apiRoutes = require("./src/modules/routes/routes")

app.use(cors());

const uri = "mongodb+srv://ElizavetaGorelova:gorelova123321@cluster0.zkrjo.mongodb.net/one?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("Connect"))
  .catch((error) => console.log(error));

app.use(bodyParser.json());
app.use("/", apiRoutes);


app.listen(8000, () => {
  console.log("Example app listening on port 8000!");
});
