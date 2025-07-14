"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeopleRoute = void 0;
const express_1 = __importDefault(require("express"));
const OurPeople_controller_1 = require("./OurPeople.controller");
const router = express_1.default.Router();
router.post("/", OurPeople_controller_1.PeopleController.addOurPeople);
router.get("/", OurPeople_controller_1.PeopleController.getAllOurPeople);
router.get("/wm", OurPeople_controller_1.PeopleController.getAllOurPeopleWithMessage);
router.get("/:peopleId", OurPeople_controller_1.PeopleController.getSpecificOurPeople);
router.delete("/:peopleId", OurPeople_controller_1.PeopleController.deleteOurPeople);
router.patch("/:peopleId", OurPeople_controller_1.PeopleController.updateOurPeople);
exports.PeopleRoute = router;
