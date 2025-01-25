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
exports.StationaryControllers = void 0;
const stationary_service_1 = require("./stationary.service");
const createStationary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const stationary = req.body;
        const result = yield stationary_service_1.StationaryServices.createStationaryIntoDB(stationary);
        res.status(200).json({
            success: true,
            message: `Product created successfully`,
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const getAllStationary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield stationary_service_1.StationaryServices.getAllStationaryFromDB();
        res.status(200).json({
            success: true,
            message: `Products retrieved successfully`,
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const getSingleStationary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield stationary_service_1.StationaryServices.getSingleStationaryFromDB(productId);
        res.status(200).json({
            success: true,
            message: `Product retrieved successfully`,
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const updateSingleStationary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updateData = req.body;
        const result = yield stationary_service_1.StationaryServices.updateSingleStationaryFromDB(productId, updateData);
        res.status(200).json({
            success: true,
            message: `Product updated successfully`,
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const deleteSingleStationary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield stationary_service_1.StationaryServices.deleteSingleStationaryFromDB(productId);
        res.status(200).json({
            success: true,
            message: `Product deleted successfully`,
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.StationaryControllers = {
    createStationary,
    getAllStationary,
    getSingleStationary,
    updateSingleStationary,
    deleteSingleStationary,
};
