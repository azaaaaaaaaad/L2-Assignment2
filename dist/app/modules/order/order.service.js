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
exports.OrderServices = void 0;
const stationary_model_1 = require("../stationary/stationary.model");
const order_model_1 = require("./order.model");
const createOrderIntoDB = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const { product, quantity } = orderData;
    // Find the product in the inventory
    const productInInventory = yield stationary_model_1.StationaryModel.findById(product);
    // Check if the product exists
    if (!productInInventory) {
        throw new Error('Product not found.');
    }
    // Ensure the product has a defined and valid quantity
    if (typeof productInInventory.quantity !== 'number') {
        throw new Error('Product quantity is not properly defined.');
    }
    // Check if there is sufficient stock available
    if (productInInventory.quantity < quantity) {
        throw new Error('Insufficient stock available.');
    }
    // Create the order
    const order = yield order_model_1.OrderModel.create(orderData);
    // Update the inventory: reduce quantity and adjust inStock status
    productInInventory.quantity -= quantity;
    productInInventory.inStock = productInInventory.quantity > 0;
    // Save the updated product inventory
    yield productInInventory.save();
    return order;
});
const createRevenueFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const revenueAggregation = yield order_model_1.OrderModel.aggregate([
        {
            $group: {
                _id: null, // Group all documents together
                totalRevenue: { $sum: { $multiply: ['$quantity', '$totalPrice'] } }, // Calculate total revenue
            },
        },
        {
            $project: {
                _id: 0, // Exclude the _id field from the result
                totalRevenue: 1, // Include only the totalRevenue field
            },
        },
    ]);
    return revenueAggregation.length > 0 ? revenueAggregation[0].totalRevenue : 0;
});
exports.OrderServices = {
    createOrderIntoDB,
    createRevenueFromDB,
};
