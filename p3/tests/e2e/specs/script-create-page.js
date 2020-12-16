describe('Script Create Page', () => {

    // Test product
    let script = {
        name: 'My New Script',
        scene: 'A Scene',
        video_url: 'https://www.youtube.com',
        author: 'Author',
        attribution: 'Attribution',
        director: 'Director',
        characters: 'Characters',
    }

    it('adds a new script', () => {
        // First we have to login, because only auth'd users can add scripts
        // Login is a custom command defined in /tests/e2e/support/commands.js
        // Ref: https://docs.cypress.io/api/cypress-api/custom-commands.html
        cy.login();

        cy.get('[data-test="add a script-link"]').click();
        cy.get('[data-test=script-name-input]').clear().type(script.name);
        // cy.get('[data-test=script-category-input]').clear().type(script.category);
        cy.get('[data-test=script-scene-input]').clear().type(script.scene);
        cy.get('[data-test=script-video_url-input]').clear().type(script.video_url);
        cy.get('[data-test=script-author-input]').clear().type(script.author);
        cy.get('[data-test=script-attribution-input]').clear().type(script.attribution);
        cy.get('[data-test=script-director-input]').clear().type(script.director);
        cy.get('[data-test=script-characters-input]').clear().type(script.characters);
        cy.get('[data-test=add-script-button]').click();
        // Go to the products page and confirm our new product is visible there
        cy.contains(script.name);
        cy.contains('No Lines Available, Add One Now!');
    });

    it('shows error messages if new product data is invalid', () => {
        cy.login();
        cy.get('[data-test="add a script-link"]').click();        
        cy.get('[data-test=script-name-input]').clear();
        cy.get('[data-test=add-script-button]').click();
        cy.contains("The name field is required.");

        cy.get('[data-test=script-scene-input]').clear();        
        cy.get('[data-test=add-script-button]').click();
        cy.contains("The scene field is required.");

        cy.get('[data-test=script-video_url-input]').clear();
        cy.get('[data-test=add-script-button]').click();
        cy.contains("The video url field is required.");

        cy.get('[data-test=script-characters-input]').clear();
        cy.get('[data-test=add-script-button]').click();
        cy.contains("The characters field is required.");        

    });
})