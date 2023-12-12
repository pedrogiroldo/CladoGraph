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

const descendants = ['1', '2', '3', '4', '5'];

describe('tree script', { testIsolation: false }, () => {
  it('passes', () => {
    cy.visit('http://localhost:1212');
  });

  beforeEach(() => {
    cy.visit('http://localhost:1212');
  });

  it('clear session storage', () => {
    cy.clearAllSessionStorage();
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

  it('add descendants', () => {
    cy.get('button:contains("Adicionar descendentes")').click();

    // add all descendants
    descendants.forEach((descendant) => {
      cy.get('#descendantNameInput').type(descendant);
      cy.get('#addDescendantButton').click();
    });

    // add descendants traits
    // descendant 1
    cy.get('#trait1descendant1').click();
    cy.get('#trait2descendant1').click();
    cy.get('#trait5descendant1').click();
    cy.get('#trait6descendant1').click();
    cy.get('#trait8descendant1').click();
    cy.get('#trait9descendant1').click();
    cy.get('#trait10descendant1').click();
    cy.get('#trait13descendant1').click();
    cy.get('#trait14descendant1').click();

    // descendant 2
    cy.get('#trait1descendant2').click();
    cy.get('#trait2descendant2').click();
    cy.get('#trait3descendant2').click();
    cy.get('#trait6descendant2').click();
    cy.get('#trait7descendant2').click();
    cy.get('#trait8descendant2').click();
    cy.get('#trait10descendant2').click();
    cy.get('#trait11descendant2').click();

    // descendant 3
    cy.get('#trait2descendant3').click();
    cy.get('#trait3descendant3').click();
    cy.get('#trait5descendant3').click();
    cy.get('#trait6descendant3').click();
    cy.get('#trait8descendant3').click();
    cy.get('#trait9descendant3').click();
    cy.get('#trait12descendant3').click();
    cy.get('#trait13descendant3').click();

    // descendant 4
    cy.get('#trait4descendant4').click();
    cy.get('#trait5descendant4').click();
    cy.get('#trait7descendant4').click();
    cy.get('#trait10descendant4').click();
    cy.get('#trait11descendant4').click();
    cy.get('#trait12descendant4').click();
    cy.get('#trait13descendant4').click();

    // descendant 5
    cy.get('#trait2descendant5').click();
    cy.get('#trait3descendant5').click();
    cy.get('#trait4descendant5').click();
    cy.get('#trait5descendant5').click();
    cy.get('#trait6descendant5').click();
    cy.get('#trait8descendant5').click();
    cy.get('#trait9descendant5').click();
    cy.get('#trait11descendant5').click();
    cy.get('#trait12descendant5').click();
    cy.get('#trait13descendant5').click();

    // save descendants
    cy.get('button:contains("Salvar")').click();
  });

  it('generate tree', () => {
    cy.get('button:contains("Gerar árvore")').click();
  });
});
