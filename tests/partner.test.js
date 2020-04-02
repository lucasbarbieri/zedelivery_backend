// describe("Defining variables", () => {
//   const OLD_ENV = process.env;

//   beforeEach(() => {
//     jest.resetModules(); // this is important - it clears the cache
//     process.env = { ...OLD_ENV };
//     delete process.env.NODE_ENV;
//   });

//   afterEach(() => {
//     process.env = OLD_ENV;
//   });

//   test("will receive process.env variables", () => {
//     // set the variables
//     process.env.NODE_ENV = "dev";
//     process.env.PROXY_PREFIX = "/new-prefix/";
//     process.env.API_URL = "https://new-api.com/";
//     process.env.APP_PORT = "7080";
//     process.env.USE_PROXY = "false";

//     const testedModule = require("../../config/env").default;

//     // ... actual testing
//   });
// });

describe("Sample Test", () => {
  it("should test that true === true", () => {
    expect(true).toBe(true);
  });
});
