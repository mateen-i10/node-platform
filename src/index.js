import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/index.js";

connectDB().then(() => {
  console.log("🚀 App is running...");
  app.listen(process.env.PORT, () => {
    console.log(`🚀 App is running on port ${process.env.PORT}`);
  });
}).catch((err) => {
  console.log("❌ Error in connecting to MongoDB", err);
});


