Cypress.Commands.add('projectPage', (projectSelect, amount, creditMaturity) => {
    cy.get('#projectSelect')
        .select(projectSelect)
    cy.get('#amount')
        .select(amount)
    cy.get('#creditMaturity')
        .select(creditMaturity)
})

Cypress.Commands.add("emailConsumer", (emailInput) => {
    cy.get('#email-input')
        .type(emailInput)
        .should('have.value', emailInput)
})

Cypress.Commands.add("maritalStatusConsumer", (maritalStatus, childNumber) => {
    cy.get('#maritalStatus-input')
        .select(maritalStatus)
        .should('have.class', 'ng-valid')
    cy.get('#childNumberPropal-input')
        .select(childNumber)
        .should('have.class', 'ng-valid')
})

Cypress.Commands.add("housingStatusConsumer", (housingStatus, housingStatusFromMonth, housingStatusFromYear) => {
    cy.get('#housingStatus-input')
        .select(housingStatus)
    cy.get('#housingStatusFrom-input-month')
        .type(housingStatusFromMonth)
        .should('have.value', housingStatusFromMonth)
    cy.get('#housingStatusFrom-input-year')
        .type(housingStatusFromYear)
        .should('have.value',housingStatusFromYear)
})

Cypress.Commands.add("activityConsumer", (activitySector, profession, isIndependent,isPrivateSector,isRetired,businessActivityStartDateMonth, businessActivityStartDateYear,contractType,employedFromMonth,employedFromYear,pensionFromMonth, pensionFromYear) => {
    cy.get('#activitySector-input')
        .select(activitySector)
    cy.get('#profession-input')
        .select(profession)

    if( isIndependent == true ){
    cy.get('#businessActivityStartDate-input-month')
        .type(businessActivityStartDateMonth)
        .should('have.value', businessActivityStartDateMonth)
    cy.get('#businessActivityStartDate-input-year')
        .type(businessActivityStartDateYear)
        .should('have.class', 'ng-valid')
}
    if(isPrivateSector == true){
    cy.get('#contractType-input')
        .select(contractType)
        .should('have.class', 'ng-valid')
    cy.get('#employedFrom-input-month')
        .type(employedFromMonth)
        .should('have.value', employedFromMonth)
    cy.get('#employedFrom-input-year')
        .type(employedFromYear)
        .should('have.class', 'ng-valid')
    }
    if(isRetired == true ) {
    cy.get('#pensionFrom-input-month')
    .type(pensionFromMonth)
    .should('have.class', 'ng-valid')
    cy.get('#pensionFrom-input-year')
    .type(pensionFromYear)
    .should('have.class', 'ng-valid')
}
})

Cypress.Commands.add("partnerActivityMarriedConsumer", (partnerActivitySector, partnerProfession, partnerContractType, partnerEmployedFromMonth, partnerEmployedFromYear, isMariedOrCohabitted,isPartnerJob ) =>{
    if(isMariedOrCohabitted == true) {
    
    cy.get('#partnerActivitySector-input')
        .select(partnerActivitySector)
    cy.get('#partnerProfession-input')
        .select(partnerProfession)
        .should('have.class', 'ng-valid')
    }
    if(isPartnerJob == true ){ 
    cy.get('#partnerContractType-input')
        .select(partnerContractType)
        .should('have.class', 'ng-valid')
    cy.get('#partnerEmployedFrom-input-month')
        .type(partnerEmployedFromMonth)
        .should('have.value', partnerEmployedFromMonth)
    cy.get('#partnerEmployedFrom-input-year')
        .type(partnerEmployedFromYear)
        .should('have.class', 'ng-valid')
    }
   
}) 

Cypress.Commands.add("incomConsumer", (mainIncome, housingAssistance, additionalIncome, isMariedOrCohabitted, coIncome) => {
    cy.get('#mainIncome-input')
        .type(mainIncome)
        .should('have.class', 'ng-valid')
    cy.get('#housingAssistance-input')
        .type(housingAssistance)
        .should('have.class', 'ng-valid')    
    cy.get('#additionalIncome-input')
        .type(additionalIncome)
        .should('have.class', 'ng-valid')  
        
    if(isMariedOrCohabitted == true ){ 
    cy.get('#coIncome-input')
    .type(coIncome)
    .should('have.class', 'ng-valid') 
}
})

Cypress.Commands.add('outcomeConsumer', (isTenantOrLodge,isMortgage,isLoaned,isOwner,loanCount,rentAmount,mortgageAmount,type,loanAmount) => {

    if(isTenantOrLodge == true ){
    cy.get('#rentAmount-input')
        .type(rentAmount)
        .should('have.class', 'ng-valid') 
    }
    if(isMortgage == true ){
    cy.get('#mortgageAmount-input')
        .type(mortgageAmount)
        .should('have.class', 'ng-valid') 
        }
    if(isLoaned == true || isOwner == true ){
    cy.get('#loanCount-input')
        .select(loanCount)
        .should('have.class', 'ng-valid')
    }
      if(loanCount >= 1){
    cy.get('#type-input')
        .select(type)
        .should('have.class', 'ng-valid')
    cy.get('#loanAmount-input')
        .type(loanAmount)
        .should('have.class', 'ng-valid')
            
    }
})

Cypress.Commands.add('bankConsumer', (bankCode, bankFromYear) => {
    cy.get('#bankCode-input')
        .select(bankCode)
        .should('have.class', 'ng-valid')
    cy.get('#bankFrom-input-year')
        .type(bankFromYear)
        .should('have.class', 'ng-valid') 
})
Cypress.Commands.add('personalInfoConsumer', (gender, lastName, firstName, dateOfBirthDay, dateOfBirthMonth, dateOfBirthYear, postalCode) => {
    cy.get(gender)
        .check({ force: true })
        .should('be.checked')
    cy.get('#lastName-input')
        .type(lastName)
        .should('have.class', 'ng-valid')
    cy.get('#firstName-input')
        .type(firstName)
        .should('have.class', 'ng-valid')
    cy.get('#dateOfBirth-input-day')
        .type(dateOfBirthDay)
    cy.get('#dateOfBirth-input-month')
        .type(dateOfBirthMonth)
    cy.get('#dateOfBirth-input-year')
        .type(dateOfBirthYear)
        .should('have.class', 'ng-valid')
    cy.get('#postalCode-input')
        .type(postalCode)
        .should('have.class', 'ng-valid')
})
Cypress.Commands.add('personalInfoPartnerConsumer', (partnerPostalCode,partnerDateOfBirthYear,partnerDateOfBirthMonth, partnerDateOfBirthDay,partnerFirstName,isMarried,partnerMaidenName,isPartner,partnerGender,partnerLastName) => {
    if(isPartner == true ){
    cy.get(partnerGender)
        .check({ force: true })
        .should('be.checked')
    cy.get('#lastName-input')
        .type(partnerLastName)
        .should('have.class', 'ng-valid')
    if(isMarried == true ){
    cy.get('#maidenName-input')
        .type(partnerMaidenName)
        .should('have.class', 'ng-valid')
    }
    cy.get('#firstName-input')
        .type(partnerFirstName)
        .should('have.class', 'ng-valid')
    cy.get('#dateOfBirth-input-day')
        .type(partnerDateOfBirthDay)
    cy.get('#dateOfBirth-input-month')
        .type(partnerDateOfBirthMonth)
    cy.get('#dateOfBirth-input-year')
        .type(partnerDateOfBirthYear)
        .should('have.class', 'ng-valid')
    cy.get('#postalCode-input')
        .type(partnerPostalCode)
        .should('have.class', 'ng-valid')
     }
})
Cypress.Commands.add('contactInfoConsumer', (cellPhoneNumber, phoneNumber, address, postalCode, countryZone) => {
    cy.get('#cellPhoneNumber-input')
        .type(cellPhoneNumber)
        .should('have.class', 'ng-valid')
    cy.get('#phoneNumber-input')
        .type(phoneNumber)
        .should('have.class', 'ng-valid')
    cy.get('#address-input')
        .type(address)
        .should('have.class', 'ng-valid')
    cy.get('#postalCode-input')
        .type(postalCode)
        .should('have.class', 'ng-valid')
    cy.get('#countryZone-input')
        .select(countryZone)
        .should('have.class', 'ng-valid')
})