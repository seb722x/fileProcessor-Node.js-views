const express = require("express");
const hbs = require('hbs');
const bodyParser = require('body-parser'); 
const router = require("./src/routes/file.route");
const port = process.env.PORT || 3001;


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');
app.set("views", __dirname + "/views");

app.use('/public', express.static('public'));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});