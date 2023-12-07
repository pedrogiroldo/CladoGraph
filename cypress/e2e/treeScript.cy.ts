const traitList = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
];

describe('tree script', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1212');
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
});
