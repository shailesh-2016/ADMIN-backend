const express = require("express");
const app = express();
const PORT = 8000;
app.set("view engine", "ejs");
require("./config/db").main();
const cookieParser = require("cookie-parser");
const flash=require("express-flash")
const session=require("express-session")
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser())
app.use('/profile',express.static('uploads'))
const router = require("./routes/cat_route");
const View = require("./routes/view.route");

const Admin = require("./routes/admin.route");
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
  }))
  app.use(flash())
app.use("/api", router);
app.use("/", View);
app.use('/api/admin',Admin)
app.get("/", (req, res) => res.render("pages/index"));
app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`));
