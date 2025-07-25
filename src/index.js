import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/index.js";
import app from "./app.js";  // ✅ Correct import from app.js

connectDB().then(() => {
  console.log("✅ MongoDB connected");
  app.listen(process.env.PORT, () => {
    console.log(`🚀 App is running on port ${process.env.PORT}`);
  });
}).catch((err) => {
  console.log("❌ Error in connecting to MongoDB", err);
});
