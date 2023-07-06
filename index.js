const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

// dotenv config
dotenv.config();

// mongoDb connection
connectDb();

const app = express();

// Cors
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// middleware
app.use(express.json());
app.use(morgan("dev"));

// require routes
const user = require("./routes/userRoutes");
const admin = require("./routes/adminRoutes");
const doctor = require("./routes/doctorRoutes");

// routes
app.use("/api/v1/user", user);
app.use("/api/v1/admin", admin);
app.use("/api/v1/doctor", doctor);

// listen port
const port = process.env.PORT || 6000;

app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on Port : ${process.env.PORT} `
      .bgCyan.white
  );
});
