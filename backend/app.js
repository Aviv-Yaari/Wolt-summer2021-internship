const express = require("express");
const app = express();
const port = 9000;
const cors = require('cors');
app.use(cors());
const path = require("path"); // for the next line..
app.set("views", path.join(__dirname, "views")); // for a non-changing views file path
app.set("view engine", "ejs"); // set the view engine
const controller = require("./utilities/controller");
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/discovery", (req, res) => {
  const { lat, lon } = req.query;
  const userLocation = { lat, lon };
  res.send(JSON.stringify(controller.renderJson(userLocation)));
});

app.listen(port, () => {
  console.log("Example app listening at http://localhost:" + port);
});
