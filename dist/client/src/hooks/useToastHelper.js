"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCustomToast = exports.useErrorToast = exports.useSuccessToast = exports.useToastHelper = void 0;
const react_1 = require("@chakra-ui/react");
const useToastHelper = () => {
    const toast = (0, react_1.useToast)();
    const showToast = (message, options) => {
        toast(Object.assign({ title: 'Notification', description: message, status: 'success', duration: 5000, isClosable: true, position: 'top-right' }, options));
    };
    return showToast;
};
exports.useToastHelper = useToastHelper;
const useSuccessToast = () => {
    const showToast = (0, exports.useToastHelper)();
    const showSuccessToast = (message, options) => {
        showToast(message, Object.assign({ status: 'success', title: 'Success' }, options));
    };
    return showSuccessToast;
};
exports.useSuccessToast = useSuccessToast;
const useErrorToast = () => {
    const showToast = (0, exports.useToastHelper)();
    const showErrorToast = (message, options) => {
        showToast(message, Object.assign({ status: 'error', title: 'Error' }, options));
    };
    return showErrorToast;
};
exports.useErrorToast = useErrorToast;
const useCustomToast = () => {
    const showSuccessToast = (0, exports.useSuccessToast)();
    const showErrorToast = (0, exports.useErrorToast)();
    return {
        showSuccessToast,
        showErrorToast,
    };
};
exports.useCustomToast = useCustomToast;
