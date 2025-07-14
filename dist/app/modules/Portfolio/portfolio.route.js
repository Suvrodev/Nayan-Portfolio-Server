"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioRoute = void 0;
const express_1 = __importDefault(require("express"));
const portfolio_controller_1 = require("./portfolio.controller");
const router = express_1.default.Router();
router.post("/", portfolio_controller_1.PortfolioController.addPortfolio);
router.get("/", portfolio_controller_1.PortfolioController.getAllPortfolio);
router.get("/:portfolioTitle", portfolio_controller_1.PortfolioController.getSpecificPortfolio);
router.delete("/:portfolioId", portfolio_controller_1.PortfolioController.deletePortfolio);
router.patch("/:portfolioId", portfolio_controller_1.PortfolioController.updatePortfolio);
exports.PortfolioRoute = router;
