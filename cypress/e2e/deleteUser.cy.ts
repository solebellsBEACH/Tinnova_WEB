describe('Testando a deleção dos usuários', () => {
    it('Visitando Users', () => {
      cy.visit('http://localhost:3000/Users')
    })
    it('Preenchendo campos', () => {
      //Pegando campos de Login
  
      cy.get('#deleteButton-26899337649').click();
      
    });
  })