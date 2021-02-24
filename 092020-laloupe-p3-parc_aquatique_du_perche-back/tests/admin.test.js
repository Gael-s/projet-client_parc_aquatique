const request = require("supertest");
const app = require("../app.js");

let response;
const login = {
  user: "admin@gmail.com",
  pass: "Admin_28"
}


describe("Admin Endpoints", () => {
  describe("route /newadmin Endpoints", () => {
    beforeEach(async () => {
      response = await request(app)
        .post("/Admin/new")
        .send(login)
    });
    it('create newadmin in the test DB', async () => {
      expect(response.body.message).toEqual("Utilisateur enregistré");
    });
  });
    describe("route /Admin Endpoints", () => {
      beforeEach(async () => {
        response = await request(app)
          .post("/Admin/new")
          .send(login)
        response = await request(app)
          .post("/Admin")
          .send(login)
      });
      it('the returned body is an array', async () => {
        expect(Array.isArray(response.body));
      });
      it('connexion admin', async () => {
        expect(response.body).toMatchObject({ status: "Success", message: "information de connection ok", data: login });
      });
    });
  });