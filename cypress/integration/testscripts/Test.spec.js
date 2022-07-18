describe("Login feature", function(){
    it("visit Orange HRM portal", function(){
        cy.visit(Cypress.env("HRMPortal"))
    })
    it("Login to portal", function(){
        cy.get('#txtUsername').type(Cypress.env('username'))
        cy.get('#txtPassword').type(Cypress.env('password'))
        cy.get('#btnLogin').click()
       
    })

    console.log("logged in")
})