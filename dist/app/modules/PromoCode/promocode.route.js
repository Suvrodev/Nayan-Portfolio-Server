"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromocodeRoute = void 0;
const express_1 = __importDefault(require("express"));
const peomocode_controller_1 = require("./peomocode.controller");
const router = express_1.default.Router();
router.post("/", peomocode_controller_1.PromocodeController.addPromoCode);
router.get("/", peomocode_controller_1.PromocodeController.getAllPromoCode);
router.get("/:promoId", peomocode_controller_1.PromocodeController.getSpecificPromocode);
router.get("/promocode/:promoCode", peomocode_controller_1.PromocodeController.getSpecificPromoBasedOnPromoCodeFromDB);
router.delete("/:promoId", peomocode_controller_1.PromocodeController.deletePromocode);
router.patch("/:promoId", peomocode_controller_1.PromocodeController.updatePromocode);
exports.PromocodeRoute = router;
