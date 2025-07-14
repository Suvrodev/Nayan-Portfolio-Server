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
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUserId = void 0;
const admin_model_1 = require("./admin.model");
const generateUserId = () => __awaiter(void 0, void 0, void 0, function* () {
    const year = new Date().getFullYear().toString().slice(-2);
    const month = String(new Date().getMonth() + 1).padStart(2, "0");
    const totalRegisteredUser = yield admin_model_1.adminModel.countDocuments();
    console.log("Already Total student: ", totalRegisteredUser);
    // const totalRegisteredUserString = totalRegisteredUser.toString();
    // console.log("Total student String: ", totalRegisteredUserString);
    // const totalRegisteredUserStringLength = totalRegisteredUserString.length;
    // console.log("Total student String Length: ", totalRegisteredUserStringLength);
    // let generateId: string = "";
    // if (totalRegisteredUserStringLength === 1) {
    //   console.log("1st block");
    //   generateId = year + month + "00" + (totalRegisteredUser + 1);
    // }
    // if (totalRegisteredUserStringLength === 2) {
    //   console.log("2nd block");
    //   generateId = year + month + "0" + (totalRegisteredUser + 1);
    // }
    // if (totalRegisteredUserStringLength === 3) {
    //   console.log("3rd block");
    //   generateId = year + month + (totalRegisteredUser + 1);
    // }
    const newStudentId = totalRegisteredUser + 1;
    console.log("new student id: ", newStudentId);
    const newStudentIdString = newStudentId.toString();
    console.log("new student id string: ", newStudentIdString);
    const newStudentIdStringLength = newStudentIdString.length;
    console.log("new student id string Length: ", newStudentIdStringLength);
    let generateId = "";
    if (newStudentIdStringLength === 1) {
        console.log("1st block");
        generateId = year + month + "00" + newStudentId;
    }
    if (newStudentIdStringLength === 2) {
        console.log("2nd block");
        generateId = year + month + "0" + newStudentId;
    }
    if (newStudentIdStringLength === 3) {
        console.log("3rd block");
        generateId = year + month + newStudentId;
    }
    return generateId;
});
exports.generateUserId = generateUserId;
