import express, { NextFunction, Request, Response } from "express";
import { PortfolioControllers } from "./portfolioo.controller";

const router = express.Router();

router.post("/", PortfolioControllers.addPortfolio);
router.get("/", PortfolioControllers.getAllPortfolio);
router.get("/title/:portfolioTitle", PortfolioControllers.getSpecificPortfolio);
router.delete("/:portfolioId", PortfolioControllers.deletePortfolio);
router.patch("/:portfolioId", PortfolioControllers.updatePortfolio);

export const portfoliooRoutes = router;
