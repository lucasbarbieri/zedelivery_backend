const express = require("express");
const app = express();
const request = require("supertest");
const env = require("dotenv").config();
const url = `${process.env.URL}:${process.env.PORT}`;

describe("Get Partners", () => {
  it("should respond with a json 200 response with URL in request", function(done) {
    request(url)
      .get("/partners")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(done);
  });
  it("should respond with a json 200 response sending LAT/LNG", function(done) {
    request(url)
      .get("/partners?lat=-23.5503099&lng=-46.6363896")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(done);
  });
});
