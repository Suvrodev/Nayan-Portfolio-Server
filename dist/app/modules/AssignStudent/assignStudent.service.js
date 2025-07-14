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
exports.AssignStudentServices = void 0;
const assignStudent_model_1 = require("./assignStudent.model");
//Insert AssignStudent
const createAssignStudentIntoDB = (assignStudent) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Assign Student: ", assignStudent);
    const result = yield assignStudent_model_1.AssignStudentModel.create(assignStudent);
    return result;
});
// // Get all Assign Student
// const getAllAssignSudentFromDB = async () => {
//   const result = await AssignStudentModel.find();
//   return result;
// };
// Get all Assign Student
// Get all Assign Students with search
// Get all Assign Students with search (status field removed)
// Get all Assign Student with search & filter (paymentGateWay + status) and sort
const getAllAssignSudentFromDB = (search, paymentGateWay, status, sort) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = {};
    // Search condition (status বাদ)
    if (search) {
        filter.$or = [
            { studentId: { $regex: search, $options: "i" } },
            { studentName: { $regex: search, $options: "i" } },
            { studentEmail: { $regex: search, $options: "i" } },
            { studentPhone: { $regex: search, $options: "i" } },
            { batchId: { $regex: search, $options: "i" } },
            { promoCode: { $regex: search, $options: "i" } },
            { transactionId: { $regex: search, $options: "i" } },
            { transactionMobileNumber: { $regex: search, $options: "i" } },
            { paymentGateWay: { $regex: search, $options: "i" } },
        ];
        // If search is a number, search in coursePrice, finalPrice etc.
        if (!isNaN(Number(search))) {
            filter.$or.push({ coursePrice: Number(search) }, { courseDiscount: Number(search) }, { promoPercent: Number(search) }, { finalPrice: Number(search) });
        }
    }
    // PaymentGateway filter
    if (paymentGateWay) {
        filter.paymentGateWay = paymentGateWay;
    }
    // Status filter
    if (status) {
        filter.status = status === "true"; // "true" means true, else false
    }
    // Sorting by createdAt
    let sortCriteria = {};
    if (sort) {
        sortCriteria = { createdAt: sort === "asc" ? 1 : -1 }; // ASC or DESC
    }
    else {
        sortCriteria = { createdAt: -1 }; // Default: DESCENDING order
    }
    const result = yield assignStudent_model_1.AssignStudentModel.find(filter).sort(sortCriteria);
    return result;
});
// Get specific Assign Student
const getSpecificAssignStudentFromDB = (assignId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield assignStudent_model_1.AssignStudentModel.findOne({ _id: assignId });
    return result;
});
// Get specific Assign Student
const getOwnCourseOfSAssignStudentFromDB = (studentEmail) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("student Email:", studentEmail);
    const result = yield assignStudent_model_1.AssignStudentModel.find({
        studentEmail: studentEmail,
        status: true,
    });
    return result;
});
// Get Assigner Student of instructor based on batch id and course id
const getAssignStudentOfInstructorFromDB = (batchId, coursesId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Batch id:", batchId);
    console.log("Course id:", coursesId);
    const result = yield assignStudent_model_1.AssignStudentModel.find({
        batchId: batchId,
        courseId: coursesId,
        status: true,
    });
    return result;
});
//delete AssignStudent
const deleteAssignStudentFromDB = (assignId) => __awaiter(void 0, void 0, void 0, function* () {
    //main work
    const result = yield assignStudent_model_1.AssignStudentModel.findByIdAndDelete({ _id: assignId });
    return result;
});
//update Course
const updateAssignStudetFromDB = (assignId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Assign id: ", assignId);
    console.log("Payload: ", payload);
    const result = yield assignStudent_model_1.AssignStudentModel.findByIdAndUpdate({ _id: assignId }, payload, {
        new: true,
    });
    return result;
});
exports.AssignStudentServices = {
    createAssignStudentIntoDB,
    getAllAssignSudentFromDB,
    getSpecificAssignStudentFromDB,
    getOwnCourseOfSAssignStudentFromDB,
    getAssignStudentOfInstructorFromDB,
    deleteAssignStudentFromDB,
    updateAssignStudetFromDB,
};
