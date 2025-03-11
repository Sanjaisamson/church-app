"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosPrivateRefreshInstance = exports.axiosPrivateInstance = exports.API_BASE_URL = void 0;
const axios_1 = __importDefault(require("axios"));
exports.API_BASE_URL = window.location.origin;
const baseInitializers = {
    baseURL: exports.API_BASE_URL,
    withCredentials: true,
};
const privateInitializers = Object.assign(Object.assign({}, baseInitializers), { withCredentials: true, 'Content-Type': 'application/json' });
const instance = axios_1.default.create(baseInitializers);
exports.axiosPrivateInstance = axios_1.default.create(privateInitializers);
exports.axiosPrivateRefreshInstance = axios_1.default.create(privateInitializers);
exports.default = instance;
