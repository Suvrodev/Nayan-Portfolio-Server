"use strict";
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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const globalErrorHandler_1 = __importDefault(require("./app/middleware/globalErrorHandler"));
const notFound_1 = __importDefault(require("./app/middleware/notFound"));
const app = (0, express_1.default)();
//Parser
// app.use(express.json());
app.use(express_1.default.json({ limit: "5mb" }));
app.use(express_1.default.urlencoded({ extended: true, limit: "5mb" }));
//Cors integration
// app.use(cors({ origin: ["*"], credentials: true }));
/**
 * Cors -1 (Check Cors)
 */
// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "https://aradhyacore.netlify.app",
//       "https://www.aradhyacore.com",
//       "https://aradhyacore.com",
//     ],
//     credentials: true,
//   })
// );
/**
 * Cors-2
 */
const allowedOrigins = [
    "https://sarkar-nayan.vercel.app",
    "https://www.sarkarnayan.com",
    "https://sarkar-nayan-nayansarkars-sarkar-nayans-projects.vercel.app",
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:3000",
    "https://my-next-app-seven-weld.vercel.app",
    "https://sarkar-nayan-next.vercel.app",
];
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        console.log("Incoming origin:", origin);
        // Allow requests with no origin (like mobile apps, curl, etc.)
        if (!origin)
            return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        else {
            return callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
}));
// app.use(cors({ origin: "*", credentials: true }));
//application route
// app.use("/api/products", BookRoutes);
// app.use("/api", OrderRoutes);
//Routes Configuration
app.use("/api", routes_1.default);
const getAController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Welcome to Sarkar Nayan Portfolio");
});
app.get("/", getAController);
//Global Error Handler
app.use(globalErrorHandler_1.default);
//Not Found Route
app.use(notFound_1.default);
exports.default = app;
