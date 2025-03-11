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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const sequelize_1 = require("sequelize");
require("dotenv/config");
const dbPort = (_a = process.env.DBPORT) !== null && _a !== void 0 ? _a : 5432;
const sequelize = new sequelize_1.Sequelize({
    database: (_b = process.env.DBNAME) !== null && _b !== void 0 ? _b : 'church_app_db',
    username: (_c = process.env.DBUSER) !== null && _c !== void 0 ? _c : 'postgres',
    password: (_d = process.env.DBPASS) !== null && _d !== void 0 ? _d : '1991',
    host: (_e = process.env.DBHOST) !== null && _e !== void 0 ? _e : 'localhost',
    port: Number(dbPort),
    dialect: 'postgres',
    logging: false,
});
const db = {
    Sequelize: sequelize_1.Sequelize,
    sequelize,
    models: {},
};
const models = path_1.default.join(__dirname, 'models');
void (() => __awaiter(void 0, void 0, void 0, function* () {
    for (const file of fs_1.default.readdirSync(models)) {
        if (file.indexOf('.') !== 0 && file.slice(-3) === '.ts') {
            const modelModule = yield Promise.resolve(`${path_1.default.join(models, file)}`).then(s => __importStar(require(s)));
            for (const modelName in modelModule) {
                const model = modelModule[modelName];
                db.models[model.name] = model;
            }
        }
    }
    Object.keys(db.models).forEach(function (modelName) {
        const model = db.models[modelName];
        if (model.associate) {
            model.associate(db.models);
        }
    });
}))();
exports.default = db;
