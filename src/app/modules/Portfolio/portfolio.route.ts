import express, { NextFunction, Request, Response } from "express";
import { PortfolioController } from "./portfolio.controller";

const router = express.Router();

router.post("/", PortfolioController.addPortfolio);
router.get("/", PortfolioController.getAllPortfolio);
router.get("/:portfolioTitle", PortfolioController.getSpecificPortfolio);
router.delete("/:portfolioId", PortfolioController.deletePortfolio);
router.patch("/:portfolioId", PortfolioController.updatePortfolio);

export const PortfolioRoute = router;
