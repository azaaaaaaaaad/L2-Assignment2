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
exports.StationaryServices = void 0;
const stationary_model_1 = require("./stationary.model");
const createStationaryIntoDB = (stationary) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield stationary_model_1.StationaryModel.create(stationary);
    return result;
});
const getAllStationaryFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield stationary_model_1.StationaryModel.find();
    return result;
});
const getSingleStationaryFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield stationary_model_1.StationaryModel.findById(id);
    return result;
});
const updateSingleStationaryFromDB = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield stationary_model_1.StationaryModel.findByIdAndUpdate(id, updateData, {
        new: true,
    });
    return result;
});
const deleteSingleStationaryFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield stationary_model_1.StationaryModel.findByIdAndDelete(id);
    return result;
});
exports.StationaryServices = {
    createStationaryIntoDB,
    getAllStationaryFromDB,
    getSingleStationaryFromDB,
    updateSingleStationaryFromDB,
    deleteSingleStationaryFromDB,
};
