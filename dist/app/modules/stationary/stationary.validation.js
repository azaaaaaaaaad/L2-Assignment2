"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stationaryValidationSchema = void 0;
const zod_1 = require("zod");
exports.stationaryValidationSchema = zod_1.z.object({
    name: zod_1.z.string().nonempty('Name is required'),
    brand: zod_1.z.string().nonempty('Brand is required'),
    price: zod_1.z.number().min(0, 'Price must be a non-negative number'),
    category: zod_1.z.enum([
        'Writing',
        'Office Supplies',
        'Art Supplies',
        'Educational',
        'Technology',
    ]),
    description: zod_1.z.string().nonempty('Description is required'),
    quantity: zod_1.z.number().int().min(0, 'Quantity must be a non-negative integer'),
    inStock: zod_1.z.boolean(),
});
exports.default = exports.stationaryValidationSchema;
