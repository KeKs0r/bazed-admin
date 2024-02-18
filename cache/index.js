"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import your agent classes here
const hello_1 = __importDefault(require("./agents/hello"));
// Export an array of them here
exports.default = [
    hello_1.default, //
];
