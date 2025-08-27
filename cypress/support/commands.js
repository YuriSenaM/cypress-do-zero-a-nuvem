Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstname:'juliana',
    lastname:'santana',
    email:'juliana@email.com',
    text:'TESTE.'
}) =>{
    cy.get('#firstName').type(data.firstname)  
    cy.get('#lastName').type(data.lastname)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)
    cy.get('.button[type="submit"]').click()
})