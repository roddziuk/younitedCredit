context('Consumer is single',() => {

let mainDataSingle = require('../fixtures/mainDataSingle')

before(() => {
    cy.visit('https://www.younited-credit.com/')
    cy.title()
        .should('include','Le Crédit')
})

it('Choose the project for credit',() => {
    cy.projectPage(mainDataSingle.projectSelect, mainDataSingle.amount, mainDataSingle.creditMaturity)
    cy.get('[data-di-id=di-id-bca9a80c-4fc29f73]')
        .click()
    cy.url()
        .should('include', '/email')
    cy.get("h2")
        .should('contain', 'Découvrez votre offre de prêt de')
})

it('Email info page',() => {     
    cy.emailConsumer(mainDataSingle.emailInput)
    cy.wait(2000)
    cy.get('[data-di-id="di-id-8c30ab93-a687b9f3"]')
        .click()
    cy.url()
        .should('include', '/familysituation')
    cy.get("h2")
        .should('contain', 'Votre situation familiale')
})

it('Marital Status',() => {
    cy.maritalStatusConsumer(mainDataSingle.maritalStatus, mainDataSingle.childNumber)
    cy.get('[type="checkbox"]')
        .check({ force: true })
        .should('be.checked') 
    cy.get('[data-test="navigator-compact-forward"]')
        .click()
    cy.url()
        .should('include', '/housing')
    cy.get("h2")
        .should('contain', 'Votre logement')
})

it('Housing Status',() => {
    cy.housingStatusConsumer(mainDataSingle.housingStatus, mainDataSingle.housingStatusFromMonth,mainDataSingle.housingStatusFromYear)
    cy.get('[type="checkbox"]')
        .uncheck({ force: true })
    cy.get('[data-test="navigator-compact-forward"]')
        .click()
    cy.url()
        .should('include', '/professionalsituation')
    cy.get("h2")
        .should('contain', 'Votre situation professionnelle')
})

it('Activity Sector',() => {
    cy.activityConsumer(mainDataSingle.activitySector, mainDataSingle.profession, mainDataSingle.businessActivityStartDateMonth, mainDataSingle.businessActivityStartDateYear)
    cy.get('[data-di-id="di-id-d838032c-320c79b9"]')
        .click()
    cy.get('[data-test="navigator-compact-forward"]')
        .click()
    cy.url()
        .should('include', '/incomes')
    cy.get("h2")
        .should('contain', 'Vos revenus mensuels')
})

it('Incomes',() => {
    cy.incomConsumer(mainDataSingle.mainIncome, mainDataSingle.housingAssistance, mainDataSingle.additionalIncome)
    cy.get('[data-test="navigator-compact-forward"]')
        .click()
    cy.url()
        .should('include', '/outcomes')
    cy.get("h2")
        .should('contain','Vos charges mensuelles')
})

it('Outcomes',() => {
    cy.outcomeConsumer(mainDataSingle.rentAmount, mainDataSingle.loanCount, mainDataSingle.type,mainDataSingle.loanAmount)
    cy.get('[data-test="navigator-compact-forward"]')
        .click()
    cy.url()
        .should('include', '/bank')
    cy.get("h2")
        .should('contain', 'Votre banque')
})

it('Bank',() => {
    cy.bankConsumer(mainDataSingle.bankCode, mainDataSingle.bankFromYear)
    cy.get('[data-test=navigator-compact-forward]')
        .click()
    cy.url()
        .should('include', '/identity')
    cy.get("h2")
        .should('contain','Vos informations')
})

  after(() => {
    cy.personalInfoConsumer(mainDataSingle.gender, mainDataSingle.lastName, mainDataSingle.firstName, mainDataSingle.dateOfBirthDay, mainDataSingle.dateOfBirthMonth, mainDataSingle.dateOfBirthYear, mainDataSingle.postalCode)
  })
})