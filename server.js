const express = require("express");
const cors = require("cors");
const path = require('path');

const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const loginRoutes = require("./routes/login");

const { verifyToken } = require("./controllers/authController");

const app = express();
const port = process.env.PORT || 5000;

// DataBase Setup
require("dotenv").config();
const db = require("./config/database");

app.use(cors());

// MiddleWare
app.use(express.json());
app.use("/users", verifyToken, userRoutes);
app.use("/posts", verifyToken, postRoutes);
app.use("/login", loginRoutes);

// Serve ReactJs App
app.use(express.static(path.join(__dirname, "client/build")));

app.use("*", (req, res) => {
    res.sendFile(__dirname + "/client/build/index.html");
});

app.listen(port, () => console.log(`server is running on port: ${port}`));

module.exports = app;
