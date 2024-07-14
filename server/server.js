const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");

const connectDB = require("./config/db");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running at port ${process.env.PORT}`);
    });
  })
  .catch((e) => {
    console.log("DB Connection failed ! ", e);
  }); 

app.use("/api/user", userRoutes);
app.use("/api/book", bookRoutes);

