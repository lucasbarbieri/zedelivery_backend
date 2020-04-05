const mongoose = require("mongoose");
const app = require("../src/app");
const supertest = require("supertest");
const request = supertest(app);

afterAll((done) => {
  mongoose.connection.close();
  done();
});

describe("Get Partners", () => {
  it("should respond with a json 200 response", async (done) => {
    const response = await request
      .get("/partners")
      .set("Accept", "application/json");
    expect(response.type).toBe("application/json");
    expect(response.status).toBe(200);
    done();
  });
  it("should respond with a json 200 response sending LAT/LNG", async (done) => {
    const response = await request
      .get("/partners?lat=-23.5503099&lng=-46.6363896")
      .set("Accept", "application/json");
    expect(response.type).toBe("application/json");
    expect(response.status).toBe(200);
    done();
  });
});

describe("Create Partner", () => {
  it("should respond with a json 200 response", async (done) => {
    const nameTest = `MetroBar - Metro Sé ${Math.random()}`;
    const response = await request
      .post("/partners")
      .send({
        tradingName: nameTest,
        ownerName: `Joana Teodora Sampaio ${Math.random()}`,
        document: "99999999999999",
        coverageArea: {
          type: "MultiPolygon",
          coordinates: [
            [
              [
                [30, 20],
                [45, 40],
                [10, 40],
                [30, 20],
              ],
            ],
          ],
        },
        address: {
          type: "Point",
          coordinates: [-23.55039, -46.63423],
        },
      })
      .set("Accept", "application/json");
    expect(response.status).toBe(201);
    expect(response.body.tradingName).toBe(nameTest);
    done();
  });
});
