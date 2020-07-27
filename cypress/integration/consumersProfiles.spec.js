let consumers = require('../fixtures/consumers')
consumers.forEach(consumers => {

context('Younited Credit ' + consumers.testName,() => {
    
    before(() => {
        cy.visit('https://www.younited-credit.com/')
        cy.title()
            .should('include','Le Crédit')
    })
    
    it('Choose the project for credit',() => {
        cy.projectPage(consumers.projectSelect, consumers.amount, consumers.creditMaturity)
        cy.get('[data-di-id=di-id-bca9a80c-4fc29f73]')
            .click()
        cy.url()
            .should('include', '/email')
        cy.get("h2")
            .should('contain', 'Découvrez votre offre de prêt de')
    })
    
    it('Email info page',() => {     
        cy.emailConsumer(consumers.emailInput)
        cy.wait(2000)
        cy.get('[data-di-id="di-id-8c30ab93-a687b9f3"]')
            .click()
        cy.url()
            .should('include', '/familysituation')
        cy.get("h2")
            .should('contain', 'Votre situation familiale')
    })
    
    it('Marital Status',() => {
        cy.maritalStatusConsumer(consumers.maritalStatus, consumers.childNumber)
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
        cy.housingStatusConsumer(consumers.housingStatus, consumers.housingStatusFromMonth, consumers.housingStatusFromYear)
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
        cy.activityConsumer(consumers.activitySector, consumers.profession, consumers.isIndependent, consumers.isPrivateSector, consumers.isRetired, consumers.businessActivityStartDateMonth, consumers.businessActivityStartDateYear, consumers.contractType, consumers.employedFromMonth, consumers.employedFromYear, consumers.pensionFromMonth, consumers.pensionFromYear)
        cy.wait(2000)
        cy.get('#ISCOMPANYBANKRUPT_FALSE')
                .check({ force: true })
                .should('be.checked')
        cy.get('[data-test=navigator-compact-forward]')
            .click()
        })
    if (consumers.maritalStatus != "SINGLE") {

    it('Partner Activity Sector',() => {
        cy.url()
            .should('include', '/partnerprofession')
        cy.get("h2")
            .should('contain', 'Profession de votre conjoint')
        cy.partnerActivityMarriedConsumer(consumers.partnerActivitySector, consumers.partnerProfession, consumers.partnerContractType, consumers.partnerEmployedFromMonth, consumers.partnerEmployedFromYear, consumers.isMariedOrCohabitted, consumers.isPartnerJob)
        cy.get('[data-test=navigator-compact-forward]')
            .click()
        cy.url()
            .should('include', '/incomes')
        cy.get("h2")
            .should('contain', 'Vos revenus mensuels')
            
    })
}
    it('Incomes',() => {
        cy.incomConsumer(consumers.mainIncome, consumers.housingAssistance, consumers.additionalIncome, consumers.isMariedOrCohabitted, consumers.coIncome)
        cy.get('[data-test="navigator-compact-forward"]')
            .click()
        cy.url()
            .should('include', '/outcomes')
        cy.get("h2")
            .should('contain','Vos charges mensuelles')
    })
    it('Outcomes',() => {
        cy.outcomeConsumer(consumers.isTenantOrLodge, consumers.isMortgage, consumers.isLoaned, consumers.isOwner, consumers.loanCount, consumers.rentAmount, consumers.mortgageAmount, consumers.type, consumers.loanAmount)
        cy.get('[data-test="navigator-compact-forward"]')
            .click()
        cy.url()
            .should('include', '/bank')
        cy.get("h2")
            .should('contain', 'Votre banque')
    })

    it('Bank',() => {
        cy.bankConsumer(consumers.bankCode, consumers.bankFromYear)
        cy.get('[data-test=navigator-compact-forward]')
            .click()
        cy.url()
            .should('include', '/identity')
        cy.get("h2")
            .should('contain','Vos informations')
    })

    it('Personal info Consumer',() => {
        cy.personalInfoConsumer(consumers.gender, consumers.lastName, consumers.firstName, consumers.dateOfBirthDay, consumers.dateOfBirthMonth, consumers.dateOfBirthYear, consumers.postalCode)
        })
    if (consumers.maritalStatus != "SINGLE") {
    it('Personal info Partner',() => {
        cy.personalInfoPartnerConsumer(consumers.partnerPostalCode, consumers.partnerDateOfBirthYear, consumers.partnerDateOfBirthMonth, consumers.partnerDateOfBirthDay, consumers.partnerFirstName, consumers.isMarried, consumers.partnerMaidenName, consumers.isPartner, consumers.partnerGender, consumers.partnerLastName)
    })
}

    it('Personal and Contact info',() => {
        cy.personalInfoConsumer(consumers.gender, consumers.lastName, consumers.firstName, consumers.dateOfBirthDay, consumers.dateOfBirthMonth, consumers.dateOfBirthYear, consumers.postalCode)

})
})
})
