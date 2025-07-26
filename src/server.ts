import app from "./app";
import config from "./app/config";
import mongoose from "mongoose";
import dbConnect from "./chatgptLib";

async function main() {
  try {
    // await mongoose.connect(config.database_url as string);

    /**
     *  For Lib from Chat gpt
     */
    await dbConnect();
    /**
     * For Increase timeout in mongoose
     */
    // await mongoose.connect(config.database_url as string, {
    //   serverSelectionTimeoutMS: 30000, // 30 seconds
    //   socketTimeoutMS: 45000, // 45 seconds
    // });

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log("Error in sever: ", error);
  }
}

// main();
main().catch(console.dir);
export default app;
