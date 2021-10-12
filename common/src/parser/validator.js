"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TIVRValidatorJSON = void 0;
const utils_1 = require("../utils");
const ajv_1 = __importDefault(require("ajv"));
// @ts-ignore
const TDSLRoot_schema_json_1 = __importDefault(require("../../out/generated/schema/TDSLRoot.schema.json"));
class TIVRValidatorJSON {
    constructor() {
        // const program = tjs.getProgramFromFiles([resolve('api/core/schema/root.d.ts')], {
        //   strictNullChecks: true,
        // } as tjs.CompilerOptions);
        //
        // this.schema = ensure(tjs.generateSchema(program, 'TDSLRoot', {
        //   required: true,
        //   noExtraProps: true,
        //   aliasRefs: true,
        //   topRef: true
        // } as tjs.PartialArgs), "Generates JSON Schema must be non empty");
        ///////////
        // schema.json must begenerated as prebuild step.
        // See api-stacks.ts for API
        // and package.json for CLI
        ///////////
        this.schema = TDSLRoot_schema_json_1.default; //require(resolve('TDSLRoot.schema.json'));
    }
    validate(source) {
        const ajv = new ajv_1.default({ allowUnionTypes: true });
        const validate = ajv.compile(this.schema);
        if (!validate(source)) {
            throw new Error(JSON.stringify((0, utils_1.ensure)(validate.errors, 'JSON schema validation error expected')));
        }
        return source;
    }
}
exports.TIVRValidatorJSON = TIVRValidatorJSON;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3BhcnNlci92YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0NBQWtDO0FBQ2xDLDhDQUFzQjtBQUd0QixhQUFhO0FBQ2IsMkdBQXFFO0FBRXJFLE1BQWEsaUJBQWlCO0lBSTVCO1FBQ0Usb0ZBQW9GO1FBQ3BGLDRCQUE0QjtRQUM1Qiw2QkFBNkI7UUFDN0IsRUFBRTtRQUNGLGlFQUFpRTtRQUNqRSxvQkFBb0I7UUFDcEIsd0JBQXdCO1FBQ3hCLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIscUVBQXFFO1FBRXJFLFdBQVc7UUFDWCxpREFBaUQ7UUFDakQsNEJBQTRCO1FBQzVCLDJCQUEyQjtRQUMzQixXQUFXO1FBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyw4QkFBTSxDQUFBLENBQUEsMkNBQTJDO0lBQ2pFLENBQUM7SUFFTSxRQUFRLENBQUMsTUFBVztRQUN6QixNQUFNLEdBQUcsR0FBRyxJQUFJLGFBQUcsQ0FBQyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUEsY0FBTSxFQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsdUNBQXVDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkc7UUFFRCxPQUFPLE1BQWtCLENBQUM7SUFDNUIsQ0FBQztDQUVGO0FBbkNELDhDQW1DQyJ9