"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLogin = useLogin;
const react_query_1 = require("@tanstack/react-query");
const api_1 = require("../services/api");
const apiUrls_1 = __importDefault(require("../services/apiUrls"));
const useToastHelper_1 = require("./useToastHelper");
function useLogin() {
    const { showErrorToast } = (0, useToastHelper_1.useCustomToast)();
    return (0, react_query_1.useMutation)({
        mutationFn: (data) => (0, api_1.postData)(apiUrls_1.default.AUTHENTICATION.LOGIN, data),
        retry: false,
        onSuccess: (resp) => {
            return resp;
        },
        onError: () => {
            showErrorToast('Error while logging in, please try again');
        },
    });
}
