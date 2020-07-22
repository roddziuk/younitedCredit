context('Consumer is in PACS',() => {

let mainDataPacs = require('../fixtures/mainDataPacs')

before(() => {
    cy.visit('https://www.younited-credit.com/')
    cy.title()
        .should('include','Le Crédit')
})

it('Choose the project for credit',() => {
    cy.projectPage(mainDataPacs.projectSelect, mainDataPacs.amount, mainDataPacs.creditMaturity)
    cy.get('[data-di-id=di-id-bca9a80c-4fc29f73]')
        .click()
    cy.url()
        .should('include', '/email')
    cy.get("h2")
        .should('contain', 'Découvrez votre offre de prêt de')
})

it('Email info page',() => {  
    cy.emailConsumer(mainDataPacs.emailInput)
    cy.wait(2000)
    cy.get('[data-di-id="di-id-8c30ab93-a687b9f3"]')
        .click()
    cy.url()
        .should('include', '/familysituation')
    cy.get("h2")
        .should('contain', 'Votre situation familiale')
})

it('Marital Status',() => {
    cy.maritalStatusConsumer(mainDataPacs.maritalStatus, mainDataPacs.childNumber)
    cy.get('[type="checkbox"]')
        .check({ force: true })
        .should('be.checked') 
    cy.get('[data-test=navigator-compact-forward]')
        .click()
    cy.url()
        .should('include', '/housing')
    cy.get("h2")
        .should('contain', 'Votre logement')
})

it('Housing Status',() => {  
    cy.housingStatusConsumer(mainDataPacs.housingStatus, mainDataPacs.housingStatusFromMonth, mainDataPacs.housingStatusFromYear)
    cy.get('[type="checkbox"]')
        .uncheck({ force: true })
    cy.get('[data-test=navigator-compact-forward]')
        .click()
    cy.url()
        .should('include', '/professionalsituation')
    cy.get("h2")
        .should('contain', 'Votre situation professionnelle')
}) 

it('Activity Sector',() => {
    cy.activityPacsConsumer(mainDataPacs.activitySector, mainDataPacs.profession, mainDataPacs.pensionFromMonth, mainDataPacs.pensionFromYear)
    cy.get('[data-test=navigator-compact-forward]')
        .click()
    cy.url()
        .should('include', '/partnerprofession')
    cy.get("h2")
        .should('contain', 'Profession de votre conjoint')
})

it('Partner Activity Sector',() => {
    cy.partnerActivityPacsConsumer(mainDataPacs.partnerActivitySector, mainDataPacs.partnerProfession, mainDataPacs.partnerContractType, mainDataPacs.partnerEmployedFromMonth, mainDataPacs.partnerEmployedFromYear)
    cy.get('[data-test=navigator-compact-forward]')
        .click()
    cy.url()
        .should('include', '/incomes')
    cy.get("h2")
        .should('contain', 'Vos revenus mensuels')
})

 it('Incomes',() => {
    cy.partnerIncomMarriedAndPacsConsumer(mainDataPacs.mainIncome, mainDataPacs.coIncome)
    cy.get('[data-test=navigator-compact-forward]')
        .click()
    cy.url()
        .should('include', '/outcomes')
    cy.get("h2")
        .should('contain', 'Vos charges mensuelles')
})

it('Outcomes',() => {
    cy.outcomePacsConsumer(mainDataPacs.rentAmount, mainDataPacs.loanCount)
    cy.get('[data-test=navigator-compact-forward]')
        .click()
    cy.url()
        .should('include', '/bank')
    cy.get("h2")
        .should('contain', 'Votre banque')
})

it('Bank',() => {
    cy.bankConsumer(mainDataPacs.bankCode, mainDataPacs.bankFromYear)
    cy.get('[data-test=navigator-compact-forward]')
        .click()
    cy.url()
        .should('include', '/identity')
    cy.get("h2")
        .should('contain','Vos informations')
})
    after(() => {
    cy.personalInfoConsumer(mainDataPacs.gender, mainDataPacs.lastName, mainDataPacs.firstName, mainDataPacs.dateOfBirthDay, mainDataPacs.dateOfBirthMonth, mainDataPacs.dateOfBirthYear, mainDataPacs.postalCode)
    })
})