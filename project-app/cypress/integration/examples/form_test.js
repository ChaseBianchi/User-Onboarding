describe('Users App', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
    })
    it('sanity test', ()=>{
        expect(2+2).to.equal(4);
    })
    it('name input and verify', ()=>{
        cy.get('#name').type('Chase').should('have.value', 'Chase');
    })
    it('email input', ()=>{
        cy.get('#email').type('email@email.com').should('have.value', 'email@email.com');
    })
    it('password input', ()=>{
        cy.get('#password').type('secret').should('have.value', 'secret');
    })
    it('tos checkbox', ()=>{
        cy.get('#tos').click().should('have.value', 'on');
    })
    it('submit form data', ()=>{
        cy.get('#name').type('Chase').should('have.value', 'Chase');
        cy.get('#email').type('email@email.com').should('have.value', 'email@email.com');
        cy.get('#password').type('secret').should('have.value', 'secret');
        cy.get('#tos').click().should('have.value', 'on');
        cy.get('#formBtn').should('not.be.disabled').click();
        cy.get('#name').should('have.value', '')
    })
    it('form validation', ()=>{
        cy.get('#name').type('Chase').should('have.value', 'Chase');
        cy.get('#name').clear();
        cy.contains('Name required.').should('exist');
        cy.get('#email').type('email@email.com').should('have.value', 'email@email.com');
        cy.get('#email').clear()
        cy.contains('Email required.').should('exist');
        cy.get('#password').type('secret').should('have.value', 'secret');
        cy.get('#password').clear();
        cy.contains('Email required.').should('exist');
        cy.get('#tos').click().should('have.value', 'on');
        cy.get('#tos').click();
        cy.contains('Accept TOS is required.').should('exist');
    })
})