import express from "express";
import cors from "cors";
require("dotenv").config();
const PORT = process.env.PORT || 8000;

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));

app.get("/", (req, res) => {
  res.json({
    author: "RS",
    message: "Hello, Welcome to Blog App!",
  });
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to database succesfully");
  } catch (err) {
    console.log("Something error in connection");
  }
  console.log(`Server is lestening on ${PORT}`);
});
