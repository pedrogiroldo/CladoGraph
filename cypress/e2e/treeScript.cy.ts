const traitList = [
  'a', // 1
  'b', // 2
  'c', // 3
  'd', // 4
  'e', // 5
  'f', // 6
  'g', // 7
  'h', // 8
  'i', // 9
  'j', // 10
  'k', // 11
  'l', // 12
  'm', // 13
  'n', // 14
];

describe('tree script', { testIsolation: false }, () => {
  beforeEach(() => {
    cy.visit('http://localhost:1212');
  });

  it('clear session storage', () => {
    cy.clearAllSessionStorage();
  });

  it('passes', () => {
    cy.visit('http://localhost:1212');
  });

  it('add traits', () => {
    cy.get('button:contains("Adicionar características")').click();

    traitList.forEach((trait) => {
      cy.get('#traitInput').type(trait);
      cy.get('button:contains("Adicionar")').click();
    });

    cy.get('button:contains("Salvar")').click();
  });

  it('add external group', () => {
    cy.get('button:contains("Adicionar grupo ext.")').click();

    cy.get('#trait1').click();

    cy.get('button:contains("Salvar")').click();
  });

  // it('add descendants', () => {});
});
