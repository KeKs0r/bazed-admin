"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adder = void 0;
const bazed_af_1 = require("@bazed-ai/bazed-af");
const zod_1 = require("zod");
/** Tool is a spicy function that can describe itself with OpenAI compatible JSON schema.*/
exports.adder = new bazed_af_1.FunctionTool(
/** name of the tool */
"adder", 
/** description of the tool */
"Adds two numbers together", 
/** Zod schema for parameters of the tool */
zod_1.z.object({ a: zod_1.z.number(), b: zod_1.z.number() }), 
/** Zod schema for return value of the tool */
zod_1.z.number(), 
/** Function for the tool to perform when called, notice that types of a and b are inferred */
async (_agent, { a, b }) => {
    return a + b;
});
