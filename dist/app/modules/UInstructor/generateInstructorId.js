"use strict";
// import { instructorModel } from "./instructor.model";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateInstructorId = void 0;
// export const generateInstructorId = async () => {
//   const totalRegisteredUser = await instructorModel.countDocuments();
//   // If no users, start from 1
//   const newInstructorId = totalRegisteredUser + 1;
//   return newInstructorId;
// };
const instructor_model_1 = require("./instructor.model");
const generateInstructorId = () => __awaiter(void 0, void 0, void 0, function* () {
    const lastInstructor = yield instructor_model_1.instructorModel
        .findOne()
        .sort({ instructorId: -1 })
        .select("instructorId");
    const maxInstructorId = Number(lastInstructor === null || lastInstructor === void 0 ? void 0 : lastInstructor.instructorId) || 0;
    const newInstructorId = maxInstructorId + 1;
    return newInstructorId;
});
exports.generateInstructorId = generateInstructorId;
