import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/index.js";

connectDB().then(() => {
  console.log("🚀 App is running...");
});


