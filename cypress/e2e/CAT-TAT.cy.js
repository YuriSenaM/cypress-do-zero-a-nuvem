
beforeEach(() => {
   cy.visit('./src/index.html')
})
describe('Central de Atendimento ao Cliente TAT', () => {
  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    cy.clock()

    const longtext = Cypress._.repeat('adcdefghijklmnopqrstuvwxyz', 10)
    
    cy.get('#firstName')
      .type('yuri')
    cy.get('#firstName')
      .should('have.value', 'yuri')
    
    cy.get('#lastName')
      .type('sena')
    cy.get('#lastName')
      .should('have.value', 'sena')

    cy.get('#email')
      .type('usuario@email.com')
    cy.get('#email')
      .should('have.value', 'usuario@email.com')

    cy.get('#phone')
      .type('85996587885')
    cy.get('#phone')
      .should('have.value', '85996587885')

    cy.get('#open-text-area')
    .type(longtext, { delay: 0 })
    cy.get('#open-text-area')
      .should('have.value', longtext)

    cy.get('.button[type="submit"]').click()
    cy.get('.success').should('be.visible')
    cy.tick(3000)
    cy.get('.success').should('not.be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    
    cy.get('#firstName')
      .type('yuri')
    cy.get('#firstName')
      .should('have.value', 'yuri')
    
    cy.get('#lastName')
      .type('sena')
    cy.get('#lastName')
      .should('have.value', 'sena')

    cy.get('#email')
      .type('emailerrado')
    cy.get('#email')
      .should('have.value', 'emailerrado')

    cy.get('#phone')
      .type('85996587885')
    cy.get('#phone')
      .should('have.value', '85996587885')

    cy.get('#open-text-area')
    .type('nada a declarar ainda', { delay: 0 })
    cy.get('#open-text-area')
      .should('have.value', 'nada a declarar ainda')

    cy.get('.button').click()
    cy.get('.error').should('be.visible')
  })
  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    
    cy.get('#firstName')
      .type('yuri')
    cy.get('#firstName')
      .should('have.value', 'yuri')
    
    cy.get('#lastName')
      .type('sena')
    cy.get('#lastName')
      .should('have.value', 'sena')

    cy.get('#email')
      .type('usuario@email.com')
    cy.get('#email')
      .should('have.value', 'usuario@email.com')

    cy.get('#phone')
      .type('abc')
    cy.get('#phone')
      .should('have.value', '')

    cy.get('#open-text-area')
    .type('nada a declarar ainda', { delay: 0 })
    cy.get('#open-text-area')
      .should('have.value', 'nada a declarar ainda')

    cy.get('.button').click()
    cy.get('.success').should('be.visible')
  })
 
  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
     cy.get('#firstName')
      .type('yuri')
    cy.get('#firstName')
      .should('have.value', 'yuri')
    
    cy.get('#lastName')
      .type('sena')
    cy.get('#lastName')
      .should('have.value', 'sena')

    cy.get('#email')
      .type('usuario@email.com')
    cy.get('#email')
      .should('have.value', 'usuario@email.com')

    cy.get('#phone-checkbox').click()

    cy.get('#open-text-area')
    .type('nada a declarar ainda', { delay: 0 })
    cy.get('#open-text-area')
      .should('have.value', 'nada a declarar ainda')

    cy.get('.button').click()
    cy.get('.error').should('be.visible')
  })  
  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName')
      .type('yuri')
    cy.get('#firstName')
      .should('have.value', 'yuri')
      .clear().should('have.value', '')
    
    cy.get('#lastName')
      .type('sena')
    cy.get('#lastName')
      .should('have.value', 'sena')
      .clear().should('have.value', '')

    cy.get('#email')
      .type('usuario@email.com')
    cy.get('#email')
      .should('have.value', 'usuario@email.com')
      .clear().should('have.value', '')

    cy.get('#phone')
      .type('85996587885')
    cy.get('#phone')
      .should('have.value', '85996587885')
      .clear().should('have.value', '')

    cy.get('#open-text-area')
    .type('nada a declarar ainda', { delay: 0 })
    cy.get('#open-text-area')
      .should('have.value', 'nada a declarar ainda')
      .clear().should('have.value', '')

    cy.get('.button').click()    
  })

 it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.get('.button').click()
    cy.get('.error').should('be.visible')
  })
  it('preenche os campos obrigatórios e envia o formulário', () => {
    const longtext = Cypress._.repeat('adcdefghijklmnopqrstuvwxyz', 10)
    cy.get('#firstName')
      .type('yuri')
    cy.get('#firstName')
      .should('have.value', 'yuri')
    
    cy.get('#lastName')
      .type('sena')
    cy.get('#lastName')
      .should('have.value', 'sena')

    cy.get('#email')
      .type('usuario@email.com')
    cy.get('#email')
      .should('have.value', 'usuario@email.com')

    cy.get('#phone')
      .type('85996587885')
    cy.get('#phone')
      .should('have.value', '85996587885')

    cy.get('#open-text-area')
    .type(longtext, { delay: 0 })
    cy.get('#open-text-area')
      .should('have.value', longtext)

    cy.contains('button', 'Enviar').click()
    cy.get('.success').should('be.visible')
  })

  it('envia o formuário com sucesso usando um comando customizado com const', () => {
   const data = {
    firstname:'yuri',
    lastname:'sena',
    email:'email@test.com',
    text:'test.'
   }
   cy.fillMandatoryFieldsAndSubmit(data)

   cy.get('.success').should('be.visible')

  })
it('envia o formuário com sucesso usando um comando customizado sem const', () => {
 
   cy.fillMandatoryFieldsAndSubmit()
   cy.get('.success').should('be.visible')

  })

  it('seleciona um produto (YouTube) por seu texto', () => {
 
   cy.fillMandatoryFieldsAndSubmit()
   cy.get('#product').select('YouTube')
     .should('have.value', 'youtube')
   cy.get('.success').should('be.visible')

  })

it('seleciona um produto (Mentoria) por seu valor (value)', () => {
 
   cy.fillMandatoryFieldsAndSubmit()
   cy.get('#product').select('mentoria')
     .should('have.value', 'mentoria')
   cy.get('.success').should('be.visible')

  })

  it('seleciona um produto (Blog) por seu índice', () => {
 
   cy.fillMandatoryFieldsAndSubmit()
   cy.get('#product').select(1)
     .should('have.value', 'blog')
   cy.get('.success').should('be.visible')

  })
   it('marca o tipo de atendimento "Feedback"', () => {
 
   cy.fillMandatoryFieldsAndSubmit()
// cy.get('input[type=radio] [value="Feedback"]').check()
   cy.get('#support-type > label:nth-child(4) > input[type=radio]')
     .check()
     .should('be.checked')
   cy.get('.success').should('be.visible')

  })

  it('marca cada tipo de atendimento', () => {
 
   cy.fillMandatoryFieldsAndSubmit()

   cy.get('input[type=radio]')
     .each(typeOfService =>{
        cy.wrap(typeOfService)
          .check()
          .should('be.checked')
     })
   cy.get('.success').should('be.visible')

  })

  it('marca ambos checkboxes, depois desmarca o último', () => {
    
    cy.get('#check input[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')

      cy.fillMandatoryFieldsAndSubmit()
       cy.get('.success').should('be.visible')
  })  

   it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário com check', () => {

    cy.get('#phone-checkbox').check()
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.error').should('be.visible')
  })  

  it('seleciona um arquivo da pasta fixtures', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/imagem1.png')
      .then(input => {
        expect(input[0].files[0].name).to.equal('imagem1.png')
      })

    //cy.fillMandatoryFieldsAndSubmit()
   // cy.get('.success').should('be.visible')
  })  

  it('seleciona um arquivo simulando um drag-and-drop', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json',{action:'drag-drop'})
      .then(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })

    //cy.fillMandatoryFieldsAndSubmit()
   // cy.get('.success').should('be.visible')
  })  

  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
    cy.fixture('example.json').as('samplefile')
    cy.get('#file-upload')
      .selectFile('@samplefile')
      .then(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })

    //cy.fillMandatoryFieldsAndSubmit()
   // cy.get('.success').should('be.visible')
  })  
  
  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    cy.contains('a', 'Política de Privacidade')
      .should('have.attr', 'href', 'privacy.html')
      .and('have.attr', 'target', '_blank')
  }) 
  
  it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    cy.contains('a', 'Política de Privacidade')
      .invoke('removeAttr', 'target')
      .click()
    cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
  })  
  it('exibe e oculta as mensagens de sucesso e erro usando .invoke()', () => {
    cy.get('.success')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Mensagem enviada com sucesso.')
      .invoke('hide')
      .should('not.be.visible')
    cy.get('.error')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Valide os campos obrigatórios!')
      .invoke('hide')
      .should('not.be.visible')
  })

  it('preenche o campo da área de texto usando o comando invoke',() =>{
    cy.get('#open-text-area').invoke('val', 'um texto qualquer')
      .should('have.value', 'um texto qualquer')
  })
  it('faz uma requisição HTTP',() =>{
    cy.request('https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html')
      .as('getResquest')
      .its('status')
      .should('be.equal', 200)
    cy.get('@getResquest')
      .its('statusText')
      .should('be.equal', 'OK')
    cy.get('@getResquest')
      .its('body')
      .should('include', 'CAC TAT')
  })
  
  it.only('exibe o gato escondido', () => {
    cy.get('#cat')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
  })
})
