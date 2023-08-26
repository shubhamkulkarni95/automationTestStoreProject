import { loginPage } from "../../pages/loginPage/loginPage"
describe("Login test suits",()=>{
    it("Login with valid user name and valid password",()=>{
        cy.visitURL("/index.php?rt=account/login")
        loginPage.verifyLoginNamelbl("Login Name:")
        loginPage.verifyPasswordlbl("Password:")
        loginPage.enterLoginNameTxt(Cypress.env('username'))
        loginPage.enterPasswordTxt(Cypress.env('password'))
        loginPage.clickLoginBtn()
        loginPage.verifyPageURL('/index.php?rt=account/account')
    })

    it("Login with Invalid user name and valid password",()=>{
        cy.visitURL("/index.php?rt=account/login")
        loginPage.verifyLoginNamelbl("Login Name:")
        loginPage.verifyPasswordlbl("Password:")
        loginPage.enterLoginNameTxt("TestTest")
        loginPage.enterPasswordTxt(Cypress.env('password'))
        loginPage.clickLoginBtn()
        loginPage.verifyAlertTxt('Error: Incorrect login or password provided.')
    })

    it("Login with valid user name and invalid password",()=>{
        cy.visitURL("/index.php?rt=account/login")
        loginPage.verifyLoginNamelbl("Login Name:")
        loginPage.verifyPasswordlbl("Password:")
        loginPage.enterLoginNameTxt(Cypress.env('username'))
        loginPage.enterPasswordTxt("Test@845")
        loginPage.clickLoginBtn()
        loginPage.verifyAlertTxt('Error: Incorrect login or password provided.')
    })

    it("Login with invalid user name and invalid password",()=>{
        cy.visitURL("/index.php?rt=account/login")
        loginPage.verifyLoginNamelbl("Login Name:")
        loginPage.verifyPasswordlbl("Password:")
        loginPage.enterLoginNameTxt("TestTest")
        loginPage.enterPasswordTxt("Test@845")
        loginPage.clickLoginBtn()
        loginPage.verifyAlertTxt('Error: Incorrect login or password provided.')
    })
})