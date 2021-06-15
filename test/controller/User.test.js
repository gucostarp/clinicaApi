const request = require('supertest');
const app = require('../../app');
startDB = require('../../database/index')

beforeAll(async() => {
    await startDB();


})


describe('User Controller', () => {

    test('post (/users) should return success', async() => {

        const req = await request(app).post('/users').send({ name: "usertest", username: "usertest", password: "1s23" })
        console.log(req.body)
        expect(req.statusCode).toBe(201);
    });

});