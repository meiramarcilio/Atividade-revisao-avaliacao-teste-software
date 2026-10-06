describe('Hotel Guest Registration', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('should register a guest successfully', () => {

        cy.get('#name')
            .type('John Smith');

        cy.get('#email')
            .type('john@example.com');

        cy.get('#phone')
            .type('555123456');

        cy.get('#checkIn')
            .type('2026-10-10');

        cy.get('#checkOut')
            .type('2026-10-15');

        cy.get('#guests')
            .type('2');

        cy.get('#register')
            .click();

        cy.contains(
            'Guest successfully registered!'
        ).should('be.visible');
    });


    it('should reject an invalid email', () => {

        cy.get('#name')
            .type('John Smith');

        cy.get('#email')
            .type('johnexample.com');

        cy.get('#phone')
            .type('555123456');

        cy.get('#checkIn')
            .type('2026-10-10');

        cy.get('#checkOut')
            .type('2026-10-15');

        cy.get('#guests')
            .type('2');

        cy.get('#register')
            .click();

        cy.contains('Invalid guest data').should('be.visible');
    });


    it('should reject zero guests', () => {

        cy.get('#name')
            .type('John Smith');

        cy.get('#email')
            .type('john@example.com');

        cy.get('#phone')
            .type('555123456');

        cy.get('#checkIn')
            .type('2026-10-10');

        cy.get('#checkOut')
            .type('2026-10-15');

        cy.get('#guests')
            .type('0');

        cy.get('#register')
            .click();

        cy.contains(
            'Invalid guest data'
        ).should('be.visible');
    });

});