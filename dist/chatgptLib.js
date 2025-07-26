"use strict";
// // lib/dbConnect.ts
// import mongoose from "mongoose";
// import config from "./app/config";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./app/config"));
const MONGODB_URI = config_1.default.database_url;
if (!MONGODB_URI) {
    throw new Error("Please define the DATABASE_URL environment variable");
}
let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}
function dbConnect() {
    return __awaiter(this, void 0, void 0, function* () {
        if (cached.conn) {
            return cached.conn;
        }
        if (!cached.promise) {
            cached.promise = mongoose_1.default.connect(MONGODB_URI, {
                serverSelectionTimeoutMS: 30000,
                socketTimeoutMS: 45000,
            });
        }
        try {
            cached.conn = yield cached.promise;
        }
        catch (e) {
            cached.promise = null;
            throw e;
        }
        return cached.conn;
    });
}
exports.default = dbConnect;
