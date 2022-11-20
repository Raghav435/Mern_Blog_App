const express = require("express");
const cors = require("cors");
require("dotenv").config();
const postRoutes = require("./routes/posts.route");
const { connection } = require("./config/db");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(
  express.urlencoded({
    limit: "30mb",
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({
    author: "RS",
    message: "Hello, Welcome to Blog App!",
  });
});

app.use("/posts", postRoutes);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to database succesfully");
  } catch (err) {
    console.log("Something error in connection");
  }
  console.log(`Server is lestening on ${PORT}`);
});
