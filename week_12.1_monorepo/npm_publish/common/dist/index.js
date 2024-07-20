"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sign = void 0;
// here we write all the zod logic
const zod_1 = require("zod");
exports.sign = zod_1.z.object({
    username: zod_1.z.string(),
    name: zod_1.z.string(),
    age: zod_1.z.number(),
});
