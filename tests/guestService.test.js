const request = require('supertest');

const app = require('../server');

const {
    clearGuests
} = require('../src/guestService');

describe('Guest API', () => {

    beforeEach(() => {
        clearGuests();
    });

    test('should register a valid guest', async () => {

        const guest = {
            name: 'John Smith',
            email: 'john@example.com',
            phone: '555123456',
            checkIn: '2026-10-10',
            checkOut: '2026-10-15',
            guests: 2
        };

        const response = await request(app)
            .post('/guests')
            .send(guest);

        expect(response.statusCode).toBe(201);

        expect(response.body.success)
            .toBe(true);

        expect(response.body.message)
            .toBe('Guest successfully registered!');
    });

    test('should reject invalid guest data', async () => {

        const guest = {
            name: '',
            email: 'invalid-email',
            phone: '555123456',
            checkIn: '2026-10-10',
            checkOut: '2026-10-15',
            guests: 2
        };

        const response = await request(app)
            .post('/guests')
            .send(guest);

        expect(response.statusCode).toBe(400);

        expect(response.body.success)
            .toBe(false);
    });

    test('should reject zero guests', async () => {

        const guest = {
            name: 'John Smith',
            email: 'john@example.com',
            phone: '555123456',
            checkIn: '2026-10-10',
            checkOut: '2026-10-15',
            guests: 0
        };

        const response = await request(app)
            .post('/guests')
            .send(guest);

        expect(response.statusCode).toBe(400);
    });

});