import request from "supertest";
jest.setTimeout(30000);

// This includes all tests for getAllItemsHandler()
describe("API Integration Test", () => {
  it("should return ids", (done) => {
    const items: unknown[] = [];

    request("http://127.0.0.1:3000")
      .get("/api/v1/value")
      .end(function (err, res) {
        expect(err).toBeNull();
        expect(res.body).toEqual(items);
        expect(res.statusCode).toEqual(200);
        done();
      });
  });
});
