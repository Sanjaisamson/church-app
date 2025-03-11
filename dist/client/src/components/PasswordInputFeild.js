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
exports.PasswordInputField = void 0;
const icons_1 = require("@chakra-ui/icons");
const react_1 = require("@chakra-ui/react");
const react_2 = require("react");
const PasswordInputField = (_a) => {
    var { label, name, register, error, validation, type } = _a, rest = __rest(_a, ["label", "name", "register", "error", "validation", "type"]);
    const [show, setShow] = (0, react_2.useState)(false);
    const handleClick = () => setShow(!show);
    return (<react_1.FormControl isInvalid={!!error}>
			{type !== 'hidden' ? <react_1.FormLabel>{label}</react_1.FormLabel> : <></>}
			<react_1.InputGroup size="md">
				<react_1.Input {...rest} type={show ? 'text' : 'password'} {...register(name, validation)}/>
				<react_1.InputRightElement>
					<react_1.IconButton size={'sm'} aria-label="view" onClick={handleClick} colorScheme={'gray'}>
						{show ? <icons_1.ViewOffIcon color="grey"/> : <icons_1.ViewIcon color="grey"/>}
					</react_1.IconButton>
				</react_1.InputRightElement>
			</react_1.InputGroup>
			{type !== 'hidden' ? <react_1.FormErrorMessage>{error === null || error === void 0 ? void 0 : error.message}</react_1.FormErrorMessage> : <></>}
		</react_1.FormControl>);
};
exports.PasswordInputField = PasswordInputField;
