"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.portfoliooRoutes = void 0;
const express_1 = __importDefault(require("express"));
const portfolioo_controller_1 = require("./portfolioo.controller");
const router = express_1.default.Router();
router.post("/", portfolioo_controller_1.PortfolioControllers.addPortfolio);
router.get("/", portfolioo_controller_1.PortfolioControllers.getAllPortfolio);
router.get("/:portfolioId", portfolioo_controller_1.PortfolioControllers.getSpecificPortfolio);
router.delete("/:portfolioId", portfolioo_controller_1.PortfolioControllers.deletePortfolio);
router.patch("/:portfolioId", portfolioo_controller_1.PortfolioControllers.updatePortfolio);
exports.portfoliooRoutes = router;
