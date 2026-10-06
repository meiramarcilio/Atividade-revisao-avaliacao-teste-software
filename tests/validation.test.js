const { validateGuest } = require('../src/validation');

describe('Guest validation', () => {

    test('should accept a valid guest', () => {

        const guest = {
            name: 'John Smith',
            email: 'john@example.com',
            phone: '555123456',
            checkIn: '2026-10-10',
            checkOut: '2026-10-15',
            guests: 2
        };

        expect(validateGuest(guest)).toBe(true);
    });

    test('should reject an empty name', () => {

        const guest = {
            name: '',
            email: 'john@example.com',
            phone: '555123456',
            checkIn: '2026-10-10',
            checkOut: '2026-10-15',
            guests: 2
        };

        expect(validateGuest(guest)).toBe(false);
    });

    test('should reject an invalid email', () => {

        const guest = {
            name: 'John Smith',
            email: 'johnexample.com',
            phone: '555123456',
            checkIn: '2026-10-10',
            checkOut: '2026-10-15',
            guests: 2
        };

        expect(validateGuest(guest)).toBe(false);
    });

    test('should reject an invalid date range', () => {

        const guest = {
            name: 'John Smith',
            email: 'john@example.com',
            phone: '555123456',
            checkIn: '2026-10-15',
            checkOut: '2026-10-10',
            guests: 2
        };

        expect(validateGuest(guest)).toBe(false);
    });

    test('should reject zero guests', () => {

        const guest = {
            name: 'John Smith',
            email: 'john@example.com',
            phone: '555123456',
            checkIn: '2026-10-10',
            checkOut: '2026-10-15',
            guests: 0
        };

        expect(validateGuest(guest)).toBe(false);
    });

});