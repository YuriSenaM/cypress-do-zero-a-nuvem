Cypress._.times(3,() =>{
    it('verifica o título da pagina', () => {
    cy.visit('./src/privacy.html')
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT - Política de Privacidade')
  })
 
 it('acessa a página da política de privacidade e verifica se tem o texto dentro', () => {
    cy.visit('./src/privacy.html')
    cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
     cy.contains('p', 'Talking About Testing').should('be.visible')

    
  })  

})