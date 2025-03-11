"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
/* eslint-disable @typescript-eslint/no-explicit-any */
const react_1 = __importStar(require("react"));
// import { I18nextProvider } from 'react-i18next';
// import i18n, { setLanguage } from './translations/i18n';
const AppProvider_1 = __importDefault(require("./contexts/AppProvider"));
const theme_1 = require("./styles/theme");
const api_1 = require("./services/api");
const apiUrls_1 = __importDefault(require("./services/apiUrls"));
const AppLoader_1 = __importDefault(require("./components/shared/AppLoader"));
const Login_1 = __importDefault(require("./Login"));
const App = () => {
    const [isLoading, setLoading] = (0, react_1.useState)(true);
    const [theme, setTheme] = (0, react_1.useState)({});
    (0, react_1.useEffect)(() => {
        const fetchConfig = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const data = yield (0, api_1.fetchData)(apiUrls_1.default.CLIENT_CONFIG);
                const customTheme = (0, theme_1.generateTheme)(data === null || data === void 0 ? void 0 : data.themeConfig);
                setTheme(customTheme);
                // await setLanguage(data.language, data.translation);
            }
            catch (error) {
                console.error('Error loading config:', error);
                setTheme((0, theme_1.generateTheme)()); // Default theme
            }
            finally {
                setLoading(false);
            }
        });
        fetchConfig();
    }, []);
    if (isLoading) {
        return <AppLoader_1.default />;
    }
    return (<AppProvider_1.default theme={theme}>
      {/* <I18nextProvider i18n={i18n}> */}
        <Login_1.default />
      {/* </I18nextProvider> */}
    </AppProvider_1.default>);
};
exports.default = App;
