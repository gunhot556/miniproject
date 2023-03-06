import app from "./index";
import request from 'supertest'

describe('POST /events/rev', () => {
    describe('test request delete', () => {
        it('should delete events and responses with 200 status', async() => {
            const res = await request(app).post('/events/rev').send({
                title:'monkeys'
            });
            expect(res.statusCode).toBe(200);
        });
        it('should delete events and responses with 500 status since title is missing', async() => {
            const res = await request(app).post('/events/rev').send({
                title:null
            });
            expect(res.statusCode).toBe(500);
        });
        it('should delete events and responses with 500 status since title is wrong', async() => {
            const res = await request(app).post('/events/rev').send({
                title:'test'
            });
            expect(res.statusCode).toBe(404);
        });
    });
});

