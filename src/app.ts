import express, { Application, Request, Response } from "express";
import cors from "cors";

import router from "./app/routes";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
const app: Application = express();

//Parser
// app.use(express.json());
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true, limit: "5mb" }));

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
app.use(
  cors({
    origin: function (origin, callback) {
      console.log("Incoming origin:", origin);
      // Allow requests with no origin (like mobile apps, curl, etc.)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// app.use(cors({ origin: "*", credentials: true }));

//application route
// app.use("/api/products", BookRoutes);
// app.use("/api", OrderRoutes);

//Routes Configuration
app.use("/api", router);

const getAController = async (req: Request, res: Response) => {
  res.send("Welcome to Sarkar Nayan Portfolio");
};
app.get("/", getAController);

//Global Error Handler
app.use(globalErrorHandler);
//Not Found Route
app.use(notFound);

export default app;
