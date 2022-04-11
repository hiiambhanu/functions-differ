import { expect } from "chai";
import { getFirebaseFunctionsAndPaths } from "./discoverer";

describe("Function Discovery", function () {
    this.timeout(0);
    it("Should return the functions paths correctly", () => {
        const dir = process.cwd().replace(/\\/g, "/");
        const expectedResult = {
            firstFunction: `${dir}/test-e2e/firstFunctions/function.ts`,
            secondFunctionHttpTrigger: `${dir}/test-e2e/secondFunction/http.trigger.ts`,
            secondFunctionPubSub: `${dir}/test-e2e/secondFunction/pubsub.trigger.ts`,
        };
        const indexFilePath = "test-e2e/index.ts";
        const result = getFirebaseFunctionsAndPaths(indexFilePath);
        expect(result).to.be.deep.equal(expectedResult);
    });
});
