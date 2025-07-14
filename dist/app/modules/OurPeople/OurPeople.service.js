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
exports.OurPeopleService = void 0;
const OurPeople_model_1 = require("./OurPeople.model");
//Insert Our People
const createOurPeopleIntoDB = (ourPeopleData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Our People: ", ourPeopleData);
    const result = yield OurPeople_model_1.OurPeopleModel.create(ourPeopleData);
    return result;
});
// Get all Our People
const getAllOurPeopleFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield OurPeople_model_1.OurPeopleModel.find().sort({ order: 1 }); // 1 for ascending
    return result;
});
// Get top 4 "Our People" who have a message, sorted by order
const getAllOurPeopleWithMessageFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield OurPeople_model_1.OurPeopleModel.find({
        message: { $exists: true, $ne: "" },
    })
        .sort({ order: 1 }) // sort by order ascending
        .limit(4); // limit to first 4
    return result;
});
// Get specific Our People
const getSpecificOurPeopleFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield OurPeople_model_1.OurPeopleModel.findOne({ instructorId: id });
    return result;
});
//delete Our People
const deleteOurPeopleFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    //main work
    console.log("People id******", id);
    const result = yield OurPeople_model_1.OurPeopleModel.deleteOne({ _id: id });
    return result;
});
//update Our People
const updateOurPeopleFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("People id::::::", id);
    console.log("UpdateOur People body: ", payload);
    const result = yield OurPeople_model_1.OurPeopleModel.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
exports.OurPeopleService = {
    createOurPeopleIntoDB,
    getAllOurPeopleFromDB,
    getAllOurPeopleWithMessageFromDB,
    getSpecificOurPeopleFromDB,
    deleteOurPeopleFromDB,
    updateOurPeopleFromDB,
};
