const app = require("./app");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
