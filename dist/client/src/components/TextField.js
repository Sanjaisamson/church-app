"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextField = void 0;
const react_1 = require("@chakra-ui/react");
const TextField = (_a) => {
    var { label, name, register, error, validation } = _a, rest = __rest(_a, ["label", "name", "register", "error", "validation"]);
    return (<react_1.FormControl isInvalid={!!error}>
			<react_1.FormLabel>{label}</react_1.FormLabel>
			<react_1.Input {...rest} {...register(name, validation)}/>
			<react_1.FormErrorMessage>{error === null || error === void 0 ? void 0 : error.message}</react_1.FormErrorMessage>
		</react_1.FormControl>);
};
exports.TextField = TextField;
