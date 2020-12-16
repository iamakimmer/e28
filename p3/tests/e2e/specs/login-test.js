
describe('Login Page', () => {

    let user = {
        name: 'Matthew J Kim',
        email: 'matthewjkim@gmail.com',
        password: 'password'
    }

    it('shows an error if login is invalid', () => {
        cy.visit('/account');
        cy.get('[data-test=email-input]').clear().type(user.email);
        cy.get('[data-test=password-input]').clear().type('this-password-should-not-work');
        cy.get('[data-test=login-button]').click();
        cy.contains('These credentials do not match our records');
    })

    it('lets a user log in and log out', () => { 
        cy.visit('/account');
        cy.get('[data-test=email-input]').clear().type(user.email);
        cy.get('[data-test=password-input]').clear().type(user.password);
        cy.get('[data-test=login-button]').click();
        cy.contains('[data-test="welcome-message"]', user.name);
        cy.get('[data-test=logout-button]').click();
        cy.get('[data-test="login-button"]').should('exist');
    })


    it('log in and then go to the register page showing that you are logged in already', () => { 
        cy.visit('/account');
        cy.get('[data-test=email-input]').clear().type(user.email);
        cy.get('[data-test=password-input]').clear().type(user.password);
        cy.get('[data-test=login-button]').click();
        cy.contains('[data-test="welcome-message"]', user.name);
        cy.visit('/register');
        cy.contains('You are already logged in, ', user.name);        
    })


})