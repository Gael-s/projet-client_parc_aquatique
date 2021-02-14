const request = require('supertest');
const app = require('../app.js');
// const { API_KEY } = require('../env.js');
let res;

describe(`Activity and Space endpoints`, () => {
    describe(`GET /infocomp/?type=espace`, () => {
        beforeEach(async () => {
            res = await request(app).get('/infocomp?type=espace');
        });
        it('status is 200', async () => {
            expect(res.status).toBe(200);
        });
        it('the returned body is an array', async () => {
            expect(Array.isArray(res.body));
        });
    });
    describe(`GET /infocomp/?type=activite`, () => {
        beforeEach(async () => {
            res = await request(app).get('/infocomp?type=activite');
        });
        it('status is 200', async () => {
            expect(res.status).toBe(200);
        });
        it('the returned body is an array', async () => {
            expect(Array.isArray(res.body));
        });
    });
});
