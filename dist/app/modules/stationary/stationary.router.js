"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationaryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const stationary_controller_1 = require("./stationary.controller");
const router = express_1.default.Router();
router.post('/', stationary_controller_1.StationaryControllers.createStationary);
router.get('/', stationary_controller_1.StationaryControllers.getAllStationary);
router.get('/:productId', stationary_controller_1.StationaryControllers.getSingleStationary);
router.put('/:productId', stationary_controller_1.StationaryControllers.updateSingleStationary);
router.delete('/:productId', stationary_controller_1.StationaryControllers.deleteSingleStationary);
exports.StationaryRoutes = router;
