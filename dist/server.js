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
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./app/config"));
const chatgptLib_1 = __importDefault(require("./chatgptLib"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // await mongoose.connect(config.database_url as string);
            /**
             *  For Lib from Chat gpt
             */
            yield (0, chatgptLib_1.default)();
            /**
             * For Increase timeout in mongoose
             */
            // await mongoose.connect(config.database_url as string, {
            //   serverSelectionTimeoutMS: 30000, // 30 seconds
            //   socketTimeoutMS: 45000, // 45 seconds
            // });
            app_1.default.listen(config_1.default.port, () => {
                console.log(`Example app listening on port ${config_1.default.port}`);
            });
        }
        catch (error) {
            console.log("Error in sever: ", error);
        }
    });
}
// main();
main().catch(console.dir);
exports.default = app_1.default;
