// // lib/dbConnect.ts
// import mongoose from "mongoose";
// import config from "./app/config";

// let isConnected = false;

// const dbConnect = async () => {
//   if (isConnected) return;

//   try {
//     const db = await mongoose.connect(config.database_url as string);
//     isConnected = true;
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("DB connection error:", error);
//     throw error;
//   }
// };

// export default dbConnect;

// lib/dbConnect.ts
import mongoose from "mongoose";
import config from "./app/config";

const MONGODB_URI = config.database_url as string;

if (!MONGODB_URI) {
  throw new Error("Please define the DATABASE_URL environment variable");
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
