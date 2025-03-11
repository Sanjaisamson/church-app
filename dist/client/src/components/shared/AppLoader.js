"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const AppLoader = ({ spinnerSize = 'xl', spinnerColor = 'green.500', spinnerThickness = '4px', spinnerSpeed = '0.65s', text = 'Loading...', textProps, boxProps, }) => {
    return (<react_2.ChakraProvider>
			<react_2.Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" position="fixed" top={0} left={0} width="100%" height="100%" {...boxProps}>
				<react_2.Spinner size={spinnerSize} color={spinnerColor} thickness={spinnerThickness} speed={spinnerSpeed} emptyColor="gray.200"/>
				<react_2.Text fontSize="lg" fontWeight="bold" mt={4} {...textProps}>
					{text}
				</react_2.Text>
			</react_2.Box>
		</react_2.ChakraProvider>);
};
exports.default = AppLoader;
