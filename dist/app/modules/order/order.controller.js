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
exports.OrderControllers = void 0;
const order_service_1 = require("./order.service");
const orderCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = req.body;
        const result = yield order_service_1.OrderServices.createOrderIntoDB(order);
        res.status(200).json({
            message: `Order created successfully`,
            status: true,
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const calculateRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.OrderServices.createRevenueFromDB();
        res.status(200).json({
            message: 'Revenue calculated successfully',
            status: true,
            data: `Total Revenue ${result}`,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.OrderControllers = {
    orderCreate,
    calculateRevenue,
};
