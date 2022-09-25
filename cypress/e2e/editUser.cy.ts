describe('Testando a edição dos usuários', () => {
    it('Visitando Users', () => {
      cy.visit('http://localhost:3000/Users')
    })
    it('Preenchendo campos', () => {
      //Pegando campos de Login
  
      cy.get('#editButton-26899337649').click();
      cy.get('#nameEditField-26899337649').type('Editado');
      cy.get('#confirmEditButton-26899337649').click();
      
    });
  })