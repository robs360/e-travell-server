
import mongoose from "mongoose";
import app from "./app";
import dotenv from "dotenv";
dotenv.config({ path: '.env.local' });
async function main() {
  try {
    console.log("url ",process.env.database_url)
    await mongoose.connect(process.env.database_url as string);

    app.listen(process.env.port, () => {
      console.log(`e-travell is running on port ${process.env.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main().catch((err) => console.log(err));
