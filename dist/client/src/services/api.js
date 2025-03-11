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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = fetchData;
exports.postData = postData;
const axios_1 = __importDefault(require("./axios"));
function fetchData(url, customAdapter, headers) {
    return __awaiter(this, void 0, void 0, function* () {
        const adapter = customAdapter || axios_1.default;
        const response = yield adapter.get(url, { headers });
        return response.data;
    });
}
function postData(url, data, customAdapter, headers) {
    return __awaiter(this, void 0, void 0, function* () {
        const adapter = customAdapter || axios_1.default;
        const response = yield adapter.post(url, data, { headers });
        return response.data;
    });
}
